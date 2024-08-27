import { StyledDiv } from "./common/StyledDiv";
import { StyledText } from "./common/StyledText";

export const Header = () => (
  <StyledDiv
    display="flex"
    flexDirection="column"
    alignItems="center"
    mt="80px"
    mb="80px"
  >
    <img
      src={require(`../images/profile-picture.jpg`)}
      alt="headshot"
      style={{ height: "90px", borderRadius: "150px" }}
    />
    <StyledText variant="title">Lily Gostovic</StyledText>
    <StyledText variant="subtitle">
      Minolta Riva Zoom 125EX | Olympus OM-D EM-5 III
    </StyledText>
  </StyledDiv>
);
