import { StyledDiv, StyledText } from "../../../components";
import journalMetadata from "../../../data/journalMetadata.json";
import { journalIds } from "../../../data/journalIds";

type JournalSuggestionsProps = {
  currentJournalId?: string;
};

/**
 * Displays the journal suggestions for the current journal. Shows the previous and
 * next journal in the journalIds array.
 *
 * @param currentJournalId - The id of the current journal.
 * @returns The journal suggestions for the current journal.
 */
export const JournalSuggestionFooter = ({
  currentJournalId,
}: JournalSuggestionsProps) => {
  if (!currentJournalId) {
    console.log("No current journal id");
    return null;
  }

  const currentJournalIndex = journalIds.findIndex(
    (journalId) => journalId === currentJournalId
  );

  const prevJournalId = journalIds[currentJournalIndex - 1];
  const nextJournalId = journalIds[currentJournalIndex + 1];

  return (
    <StyledDiv
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt="100px"
      mb="150px"
    >
      <StyledText
        variant="suggestionSectionTitle"
        textAlign="center"
        px="20px"
        pb="10px"
      >
        More Journals
      </StyledText>
      <StyledDiv
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        mt="50px"
        style={{ gap: "200px" }}
      >
        <JournalSuggestion journalId={prevJournalId} />
        <JournalSuggestion journalId={nextJournalId} />
      </StyledDiv>
    </StyledDiv>
  );
};

/**
 * Displays a single journal suggestion. Displays the journal's title, date, and
 * associated camera.
 *
 * @param journalId - The id of the journal to display.
 * @returns The journal suggestion component.
 */
const JournalSuggestion = ({ journalId }: { journalId: string }) => {
  const journal = journalMetadata.find((journal) => journal.id === journalId);

  if (!journal) {
    return null;
  }

  return (
    <a href={`/journal/${journalId}`} style={{ textDecoration: "none" }}>
      <StyledDiv
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        style={{ gap: "10px" }}
        width="220px"
      >
        <StyledDiv
          width="100%"
          height="1px"
          backgroundColor="#4a4a4a"
        ></StyledDiv>
        <StyledDiv
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          my="10px"
        >
          <StyledText
            variant="suggestionTitle"
            textAlign="center"
            px="20px"
            pb="10px"
          >
            {journal.title}
          </StyledText>
          <StyledText variant="suggestionSubtitle" textAlign="center" px="20px">
            {journal.date} | {journal.camera}
          </StyledText>
        </StyledDiv>
        <StyledDiv
          width="100%"
          height="1px"
          backgroundColor="#4a4a4a"
        ></StyledDiv>
      </StyledDiv>
    </a>
  );
};
