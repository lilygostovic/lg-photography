import "react-loading-skeleton/dist/skeleton.css";

import { useEffect, useRef, useState } from "react";

import Skeleton from "react-loading-skeleton";

import { StyledDiv } from "../../../components";

/** The maximum width of a journal image. */
const IMAGE_WIDTH = 850;
/** The margin below a journal image. */
const IMAGE_MARGIN_BOTTOM = 60;
/** The width of the loading image. */
const LOADING_IMAGE_WIDTH = IMAGE_WIDTH;
/** The height of the loading image. */
const LOADING_IMAGE_HEIGHT = 550;

/**
 * A component that displays a journal image. Dimensions are calculated based on the image's aspect ratio.
 * @param image - The image to display.
 */
export const JournalImage = ({ image }: { image: string }) => {
  const [dimensions, setDimensions] = useState({
    width: LOADING_IMAGE_WIDTH,
    height: LOADING_IMAGE_HEIGHT,
  });
  const imgRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

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
      } else {
        setDimensions({ width: IMAGE_WIDTH, height: IMAGE_WIDTH });
      }
      setIsLoaded(true);
    };
  }, [image]);

  return (
    <StyledDiv
      width={`${dimensions.width}px`}
      height={`${dimensions.height}px`}
      my={IMAGE_MARGIN_BOTTOM}
    >
      {isLoaded ? (
        <img
          ref={imgRef}
          src={image}
          alt={image}
          height="100%"
          width="100%"
          style={{ objectFit: "contain" }}
        />
      ) : (
        <Skeleton
          count={1}
          height={`${dimensions.height}px`}
          width={`${dimensions.width}px`}
        />
      )}
    </StyledDiv>
  );
};
