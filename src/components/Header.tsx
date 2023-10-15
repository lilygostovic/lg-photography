import { profilePicture } from '../images';
import { StyledDiv } from './common/StyledDiv';
import { StyledText } from './common/StyledText';

export const Header = () => (
  <StyledDiv
    display="flex"
    flexDirection="column"
    alignItems="center"
    mt="80px"
    mb="80px"
  >
    <img
      src={profilePicture}
      alt="headshot"
      style={{ height: "90px", borderRadius: "150px" }}
    />
    <StyledText variant="title">Lily Gostovic</StyledText>
    <StyledText variant="subtitle">
      FujiFilm Zoom Date 125s | Canon EOS 70D
    </StyledText>
  </StyledDiv>
);
