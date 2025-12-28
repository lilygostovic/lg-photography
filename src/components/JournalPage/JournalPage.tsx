import { useParams } from "react-router-dom";

import journalMetadata from "../../data/journalMetadata.json";
import { StyledDiv } from "../common/StyledDiv";
import { StyledText } from "../common/StyledText";
import { JournalSuggestionFooter } from "../JournalSuggestions/JournalSuggestions";
import { getImagesForJournal } from "../utils";
import { JournalImage } from "./JournalImage";

/**
 * The page for a journal. Displays the journal's header and images.
 * @param id - The id of the journal to display.
 */
export const JournalPage = () => {
  const { id } = useParams();

  const metadata = journalMetadata.find((journal) => journal.id === id);
  const images = getImagesForJournal(id);

  if (!metadata || images.length === 0) {
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
      <StyledText variant="journalTitle">{metadata.title}</StyledText>
      <StyledText variant="journalSubtitle">
        {metadata.date} | {metadata.camera}
      </StyledText>
      {images.map((image, index) => (
        <JournalImage key={index} image={image} />
      ))}
      <JournalSuggestionFooter currentJournalId={id} />
    </StyledDiv>
  );
};
