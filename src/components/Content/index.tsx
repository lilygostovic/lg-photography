import journals from "../../journals/journals.json";
import { journalIDs } from "../../types/id";
import { StyledDiv } from "../common/StyledDiv";
import { Journal } from "./Journal";

export const Content = () => (
  <StyledDiv
    display="flex"
    flexDirection="row"
    flexWrap="wrap"
    justifyContent="center"
  >
    {journalIDs.map((journalID) => {
      const journal = journals.find((journal) => journal.id === journalID);
      if (!journal) {
        return <div />;
      }

      return (
        <StyledDiv width="586px">
          <Journal
            id={journalID}
            title={journal.title}
            date={journal.date}
            camera={journal.camera}
            cover={journal.cover}
            link={`/journal/${journalID}`}
          />
        </StyledDiv>
      );
    })}
  </StyledDiv>
);
