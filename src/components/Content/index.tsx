import journalMetadata from "../../data/journalMetadata.json";
import { journalIds } from "../../types/id";
import { StyledDiv } from "../common/StyledDiv";
import { getImagesForJournal } from "../utils";
import { Journal } from "./Journal";

export const Content = () => (
  <StyledDiv
    display="flex"
    flexDirection="row"
    flexWrap="wrap"
    justifyContent="center"
  >
    {journalIds.map((journalId) => {
      const metadata = journalMetadata.find(
        (journal) => journal.id === journalId
      );

      const images = getImagesForJournal(journalId);
      const coverImage = images.find((image) => image.includes("cover"));

      if (!metadata || !coverImage) {
        return <div />;
      }

      return (
        <StyledDiv width="586px">
          <Journal
            id={journalId}
            title={metadata.title}
            date={metadata.date}
            camera={metadata.camera}
            cover={coverImage}
            link={`/journal/${journalId}`}
          />
        </StyledDiv>
      );
    })}
  </StyledDiv>
);
