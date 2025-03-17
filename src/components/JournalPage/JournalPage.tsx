import { useParams } from "react-router-dom";

import journals from "../../journals/journals.json";
import { StyledDiv } from "../common/StyledDiv";
import { StyledText } from "../common/StyledText";
import { JournalImage } from "./JournalImage";

/**
 * The page for a journal. Displays the journal's header and images.
 * @param id - The id of the journal to display.
 */
export const JournalPage = () => {
  const { id } = useParams();

  const journal = journals.find((journal) => journal.id === id);

  if (!journal) {
    return <div>Not Found...</div>;
  }

  return (
    <StyledDiv
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt="140px"
    >
      <a href="/" style={{ textDecoration: "none" }}>
        <StyledText variant="subtitle">Lily Gostovic — Journal</StyledText>
      </a>
      <StyledText variant="journalTitle">{journal.title}</StyledText>
      <StyledText variant="journalSubtitle">
        {journal.date} | {journal.camera}
      </StyledText>
      {journal.images.map((image, index) => (
        <JournalImage key={index} image={image} />
      ))}
    </StyledDiv>
  );
};