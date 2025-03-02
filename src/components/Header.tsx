import { StyledDiv } from "./common/StyledDiv";
import { StyledText } from "./common/StyledText";

const HEADSHOT_URI =
  "https://res.cloudinary.com/dd4gz3mqg/image/upload/v1740914458/profile-picture_zc5m15.jpg";

export const Header = () => (
  <StyledDiv
    display="flex"
    flexDirection="column"
    alignItems="center"
    mt="80px"
    mb="80px"
  >
    <img
      src={HEADSHOT_URI}
      alt="headshot"
      style={{ height: "90px", borderRadius: "150px" }}
    />
    <StyledText variant="title">Lily Gostovic</StyledText>
    <StyledText variant="subtitle">
      Minolta Riva Zoom 125EX | Olympus OM-D EM-5 III
    </StyledText>
  </StyledDiv>
);
