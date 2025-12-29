import { useState } from "react";

import { Header, Journals } from "./components";

enum VisibleContent {
  JOURNALS = "journals",
  PHOTOSTREAM = "photostream",
}

export const Home = () => {
  const [visibleContent, setVisibleContent] = useState<VisibleContent>(
    VisibleContent.JOURNALS
  );

  return (
    <div>
      <Header />
      {visibleContent === VisibleContent.JOURNALS && <Journals />}
    </div>
  );
};
