import { useEffect, useRef, useState } from "react";
import { StyledDiv } from "../common/StyledDiv";

/** The maximum width of a journal image. */
const IMAGE_WIDTH = 850;
/** The margin below a journal image. */
const IMAGE_MARGIN_BOTTOM = 60;

/**
 * A component that displays a journal image. Dimensions are calculated based on the image's aspect ratio.
 * @param image - The image to display.
 */
export const JournalImage = ({ image }: { image: string }) => {
  const [dimensions, setDimensions] = useState({ width: IMAGE_WIDTH, height: IMAGE_WIDTH });
  const imgRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => {
      // For horizontal images (width > height)
      if (img.width > img.height) {
        // Calculate height that maintains aspect ratio when width is 1050px
        const aspectRatio = img.width / img.height;
        const calculatedHeight = IMAGE_WIDTH / aspectRatio;
        setDimensions({ width: IMAGE_WIDTH, height: calculatedHeight });
      }
    };
  }, [image]);

  return (
    <StyledDiv 
      width={`${IMAGE_WIDTH}px`}
      height={`${dimensions.height}px`} 
      my={IMAGE_MARGIN_BOTTOM}
    >
      <img
        ref={imgRef}
        src={image}
        alt={image}
        height="100%"
        width="100%"
        style={{ objectFit: "contain" }}
      />
    </StyledDiv>
  );
};