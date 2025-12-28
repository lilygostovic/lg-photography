import * as fs from 'fs';
import * as path from 'path';
import sharp from 'sharp';

const MAX_SIZE_KB = 150;
const MAX_SIZE_BYTES = MAX_SIZE_KB * 1024;

// Use process.cwd() to get the project root, then navigate to images folder
const IMAGES_DIR = path.join(process.cwd(), 'src/images');

// Supported image extensions
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.tiff', '.bmp'];

interface CompressionResult {
  file: string;
  originalSize: number;
  newSize: number;
  compressed: boolean;
  error?: string;
}

/**
 * Recursively find all image files in a directory
 * 
 * @param dir - The directory to search for image files.
 * @param fileList - The list of image files found.
 * @returns A list of image files.
 */
function findImageFiles(dir: string, fileList: string[] = []): string[] {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findImageFiles(filePath, fileList);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (IMAGE_EXTENSIONS.includes(ext)) {
        fileList.push(filePath);
      }
    }
  });

  return fileList;
}

/**
 * Get file size in bytes
 * 
 * @param filePath - The path to the image file to get the size of.
 * @returns The size of the file in bytes.
 */
function getFileSize(filePath: string): number {
  return fs.statSync(filePath).size;
}

/**
 * Compress an image file to be below the target size
 * 
 * @param filePath - The path to the image file to compress.
 * @returns A promise that resolves to a CompressionResult object.
 */
async function compressImage(filePath: string): Promise<CompressionResult> {
  const originalSize = getFileSize(filePath);
  const result: CompressionResult = {
    file: filePath,
    originalSize,
    newSize: originalSize,
    compressed: false,
  };

  // Skip if already below threshold
  if (originalSize <= MAX_SIZE_BYTES) {
    return result;
  }

  try {
    const ext = path.extname(filePath).toLowerCase();
    let quality = 80; // Start with 80% quality
    let compressed = false;

    // Binary search for optimal quality
    let minQuality = 10;
    let maxQuality = 100;
    let bestQuality = quality;

    while (minQuality <= maxQuality) {
      quality = Math.floor((minQuality + maxQuality) / 2);

      // Create a temporary file for testing
      const tempPath = filePath + '.tmp';

      // Compress based on file type
      let sharpInstance = sharp(filePath);

      if (ext === '.png') {
        sharpInstance = sharpInstance.png({ quality, compressionLevel: 9 });
      } else if (ext === '.webp') {
        sharpInstance = sharpInstance.webp({ quality });
      } else if (ext === '.gif') {
        // GIFs are tricky, convert to webp for better compression
        sharpInstance = sharpInstance.webp({ quality });
      } else {
        // Default to JPEG for jpg, jpeg, and others
        sharpInstance = sharpInstance.jpeg({ quality, mozjpeg: true });
      }

      await sharpInstance.toFile(tempPath);
      const tempSize = getFileSize(tempPath);

      if (tempSize <= MAX_SIZE_BYTES) {
        // This quality works, try higher quality
        bestQuality = quality;
        minQuality = quality + 1;
        compressed = true;
      } else {
        // Too large, need lower quality
        maxQuality = quality - 1;
      }

      // Clean up temp file if we're still searching
      if (minQuality <= maxQuality) {
        fs.unlinkSync(tempPath);
      }
    }

    if (compressed) {
      // Apply the best quality we found
      const tempPath = filePath + '.tmp';
      let sharpInstance = sharp(filePath);

      if (ext === '.png') {
        sharpInstance = sharpInstance.png({ quality: bestQuality, compressionLevel: 9 });
      } else if (ext === '.webp') {
        sharpInstance = sharpInstance.webp({ quality: bestQuality });
      } else if (ext === '.gif') {
        sharpInstance = sharpInstance.webp({ quality: bestQuality });
      } else {
        sharpInstance = sharpInstance.jpeg({ quality: bestQuality, mozjpeg: true });
      }

      await sharpInstance.toFile(tempPath);
      const finalSize = getFileSize(tempPath);

      // Replace original with compressed version
      fs.renameSync(tempPath, filePath);

      result.newSize = finalSize;
      result.compressed = true;
    } else {
      // Even at minimum quality, it's still too large
      // Try resizing the image dimensions
      const metadata = await sharp(filePath).metadata();
      let scale = 0.9; // Start at 90% of original size

      while (scale >= 0.5) {
        const tempPath = filePath + '.tmp';
        const newWidth = Math.floor((metadata.width || 1000) * scale);
        const newHeight = Math.floor((metadata.height || 1000) * scale);

        let sharpInstance = sharp(filePath)
          .resize(newWidth, newHeight, { fit: 'inside', withoutEnlargement: true });

        if (ext === '.png') {
          sharpInstance = sharpInstance.png({ quality: 80, compressionLevel: 9 });
        } else if (ext === '.webp') {
          sharpInstance = sharpInstance.webp({ quality: 80 });
        } else if (ext === '.gif') {
          sharpInstance = sharpInstance.webp({ quality: 80 });
        } else {
          sharpInstance = sharpInstance.jpeg({ quality: 80, mozjpeg: true });
        }

        await sharpInstance.toFile(tempPath);
        const tempSize = getFileSize(tempPath);

        if (tempSize <= MAX_SIZE_BYTES) {
          fs.renameSync(tempPath, filePath);
          result.newSize = tempSize;
          result.compressed = true;
          break;
        } else {
          fs.unlinkSync(tempPath);
          scale -= 0.1;
        }
      }

      if (!result.compressed) {
        result.error = 'Could not compress below 150KB even with resizing';
      }
    }
  } catch (error) {
    result.error = error instanceof Error ? error.message : 'Unknown error';
  }

  return result;
}

/**
 * Format bytes to human-readable string
 * 
 * @param bytes - The number of bytes to format.
 * @returns A string representing the size in a human-readable format.
 */
function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

async function main() {
  console.log(`\n🔍 Scanning for images in ${IMAGES_DIR}...\n`);

  if (!fs.existsSync(IMAGES_DIR)) {
    console.error(`❌ Images directory not found: ${IMAGES_DIR}`);
    process.exit(1);
  }

  const imageFiles = findImageFiles(IMAGES_DIR);
  console.log(`📸 Found ${imageFiles.length} image file(s)\n`);

  if (imageFiles.length === 0) {
    console.log('✅ No images to compress.');
    return;
  }

  const results: CompressionResult[] = [];
  let totalOriginalSize = 0;
  let totalNewSize = 0;

  for (const file of imageFiles) {
    const relativePath = path.relative(process.cwd(), file);
    const originalSize = getFileSize(file);
    totalOriginalSize += originalSize;

    if (originalSize <= MAX_SIZE_BYTES) {
      results.push({
        file,
        originalSize,
        newSize: originalSize,
        compressed: false,
      });
      totalNewSize += originalSize;
      continue;
    }

    const result = await compressImage(file);
    results.push(result);
    totalNewSize += result.newSize;

    if (result.compressed) {
      const saved = originalSize - result.newSize;
      const savedPercent = ((saved / originalSize) * 100).toFixed(1);
      console.log(`✅ Compressed ${relativePath}`);
      console.log(`   ${formatBytes(originalSize)} → ${formatBytes(result.newSize)} (saved ${formatBytes(saved)}, ${savedPercent}%)`);
    } else if (result.error) {
      console.log(`⚠️  ${relativePath}: ${result.error}`);
    } else {
      console.log(`❌ Failed to compress ${relativePath}`);
    }
    console.log('');
  }

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 Summary');
  console.log('='.repeat(60));
  console.log(`Total files: ${imageFiles.length}`);
  console.log(`Compressed: ${results.filter(r => r.compressed).length}`);
  console.log(`Skipped: ${results.filter(r => !r.compressed && r.originalSize <= MAX_SIZE_BYTES).length}`);
  console.log(`Failed: ${results.filter(r => r.error).length}`);
  console.log(`\nTotal size: ${formatBytes(totalOriginalSize)} → ${formatBytes(totalNewSize)}`);
  const totalSaved = totalOriginalSize - totalNewSize;
  if (totalSaved > 0) {
    const totalSavedPercent = ((totalSaved / totalOriginalSize) * 100).toFixed(1);
    console.log(`Total saved: ${formatBytes(totalSaved)} (${totalSavedPercent}%)`);
  }
  console.log('='.repeat(60) + '\n');
}

// Run the script
main().catch((error) => {
  console.error('❌ Error:', error);
  process.exit(1);
});

