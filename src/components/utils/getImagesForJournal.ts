// Import all images from the images directory
const imageContext = require.context(
  "../../images",
  true,
  /\.(jpg|jpeg|png|gif|webp)$/i
);

/**
 * Get all image files from a folder matching the journalId
 * 
 * @param journalId - The journal ID to match folder name
 * @returns Array of image module paths
 */
export const getImagesForJournal = (journalId?: string): string[] => {
  if (!journalId) {
    return []
  }

  return imageContext
    .keys()
    .filter((key: string) => key.includes(`/${journalId}/`))
    .map((key: string) => imageContext(key) as string);
};