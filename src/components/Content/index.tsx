import journals from "../../journals/journals.json";
import { journalIds } from "../../types/id";
import { StyledDiv } from "../common/StyledDiv";
import { Journal } from "./Journal";

export const Content = () => (
  <StyledDiv
    display="flex"
    flexDirection="row"
    flexWrap="wrap"
    justifyContent="center"
  >
    {journalIds.map((journalId) => {
      const journal = journals.find((journal) => journal.id === journalId);
      if (!journal) {
        return <div />;
      }

      return (
        <StyledDiv width="586px">
          <Journal
            id={journalId}
            title={journal.title}
            date={journal.date}
            camera={journal.camera}
            cover={journal.cover}
            link={`/journal/${journalId}`}
          />
        </StyledDiv>
      );
    })}
  </StyledDiv>
);
