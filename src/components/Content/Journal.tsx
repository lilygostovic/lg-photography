import { StyledDiv } from '../common/StyledDiv';
import { StyledText } from '../common/StyledText';

type JournalProps = {
  title: string;
  date: string;
  cover: string;
  link: string;
};

export const Journal = ({ title, date, cover, link }: JournalProps) => (
  <StyledDiv m="40px">
    <a href={link} style={{ textDecoration: "none" }}>
      <StyledDiv display="flex" flexDirection="column" alignItems="center">
        <StyledDiv width="100%" height="380px">
          <img
            src={cover}
            alt="cover"
            height="100%"
            width="100%"
            style={{ objectFit: "cover" }}
          />
        </StyledDiv>
        <StyledText variant="header">{title}</StyledText>
        <StyledText variant="subHeader">{date}</StyledText>
      </StyledDiv>
    </a>
  </StyledDiv>
);
