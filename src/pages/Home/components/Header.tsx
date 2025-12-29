import { useEffect, useState } from "react";

import Skeleton from "react-loading-skeleton";

import { StyledDiv, StyledText } from "../../../components";

/** The URI of the headshot image. */
const HEADSHOT_URI =
  "https://res.cloudinary.com/dd4gz3mqg/image/upload/v1740914458/profile-picture_zc5m15.jpg";
/** The diameter of the headshot image. */
const HEADSHOT_DIAMETER = 150;
/** The border radius of the headshot image. */
const HEADSHOT_BORDER_RADIUS = 150;

export const Header = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = HEADSHOT_URI;
    img.onload = () => {
      setIsLoaded(true);
    };
  }, []);

  return (
    <StyledDiv
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt="80px"
      mb="80px"
    >
      {isLoaded ? (
        <img
          src={HEADSHOT_URI}
          alt="headshot"
          style={{
            height: HEADSHOT_DIAMETER,
            borderRadius: HEADSHOT_BORDER_RADIUS,
          }}
        />
      ) : (
        <Skeleton
          height={HEADSHOT_DIAMETER}
          width={HEADSHOT_DIAMETER}
          borderRadius={HEADSHOT_BORDER_RADIUS}
        />
      )}
      <StyledText variant="title">Lily Gostovic</StyledText>
      <StyledText variant="subtitle">
        Minolta Riva Zoom 125EX | Olympus OM-D EM-5 III
      </StyledText>
    </StyledDiv>
  );
};
