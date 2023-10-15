import {
  alberta2020Cover,
  alberta2023Cover,
  bordeauxCover,
  christmas2021Cover,
  christmas2022Cover,
  dijonCover,
  iceland2021Cover,
  loireValleyCover,
  monflanquinCover,
  nyc2022Cover,
  nycCover,
  paris2018Cover,
  sfCover,
  summer2021Cover,
} from "../../images";
import { StyledDiv } from "../common/StyledDiv";
import { Journal } from "./Journal";

export const Content = () => (
  <StyledDiv
    display="flex"
    flexDirection="row"
    flexWrap="wrap"
    justifyContent="center"
  >
    <StyledDiv width="586px">
      <Journal
        title="Alberta, Canada"
        date="August 2023"
        cover={alberta2023Cover}
        link="alberta-2023"
      />
    </StyledDiv>
    <StyledDiv width="586px">
      <Journal
        title="Home for Christmas 2"
        date="January 2022"
        cover={christmas2022Cover}
        link="christmas-2022"
      />
    </StyledDiv>
    <StyledDiv width="586px">
      <Journal
        title="Iceland"
        date="November 2021"
        cover={iceland2021Cover}
        link="iceland-2021"
      />
    </StyledDiv>
    <StyledDiv width="586px">
      <Journal
        title="New York City"
        date="February 2022"
        cover={nyc2022Cover}
        link="new-york-city-2022"
      />
    </StyledDiv>
    <StyledDiv width="586px">
      <Journal
        title="Summer 2021"
        date="June 2021"
        cover={summer2021Cover}
        link="summer-2021"
      />
    </StyledDiv>
    <StyledDiv width="586px">
      <Journal
        title="Home for Christmas"
        date="January 2021"
        cover={christmas2021Cover}
        link="christmas-2021"
      />
    </StyledDiv>
    <StyledDiv width="586px">
      <Journal
        title="Kickinghorse Ski Trip"
        date="March 2020"
        cover={alberta2020Cover}
        link="albera-2020"
      />
    </StyledDiv>
    <StyledDiv width="586px">
      <Journal
        title="New York City, New York"
        date="August 2019"
        cover={nycCover}
        link="new-york-city"
      />
    </StyledDiv>
    <StyledDiv width="586px">
      <Journal
        title="San Francisco, California"
        date="December 2018"
        cover={sfCover}
        link="san-francisco"
      />
    </StyledDiv>
    <StyledDiv width="586px">
      <Journal
        title="Paris, France"
        date="August 2018"
        cover={paris2018Cover}
        link="paris-2018"
      />
    </StyledDiv>
    <StyledDiv width="586px">
      <Journal
        title="Dijon, France"
        date="August 2018"
        cover={dijonCover}
        link="dijon"
      />
    </StyledDiv>
    <StyledDiv width="586px">
      <Journal
        title="Loire Valley, France"
        date="August 2018"
        cover={loireValleyCover}
        link="loire-valley"
      />
    </StyledDiv>
    <StyledDiv width="586px">
      <Journal
        title="Monflanquin, France"
        date="August 2018"
        cover={monflanquinCover}
        link="monflanquin"
      />
    </StyledDiv>
    <StyledDiv width="586px">
      <Journal
        title="Bordeux, France"
        date="August 2018"
        cover={bordeauxCover}
        link="bordeaux"
      />
    </StyledDiv>
  </StyledDiv>
);
