import { JournalID } from "../../types/id";
import { StyledDiv } from "../common/StyledDiv";
import { StyledText } from "../common/StyledText";

type JournalProps = {
  id: JournalID;
  title: string;
  date: string;
  camera: string;
  cover: string;
  link: string;
};

export const Journal = ({
  title,
  date,
  camera,
  id,
  link,
  cover,
}: JournalProps) => (
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
        <StyledText variant="subHeader">
          {date} | {camera}
        </StyledText>
      </StyledDiv>
    </a>
  </StyledDiv>
);
