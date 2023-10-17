import React from 'react';

import {
  Route,
  Routes,
} from 'react-router-dom';

import {
  HomePage,
  JournalPage,
} from './components';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/journal/:id" element={<JournalPage />} /> */}
      <Route path="/journal/alberta-2023" element={<JournalPage id="alberta-2023"/>} />
      <Route path="/journal/christmas-2022" element={<JournalPage id="christmas-2022"/>} />
      <Route path="/journal/iceland-2021" element={<JournalPage id="iceland-2021"/>} />
      <Route path="/journal/new-york-city-2022" element={<JournalPage id="new-york-city-2022"/>} />
      <Route path="/journal/summer-2021" element={<JournalPage id="summer-2021"/>} />
      <Route path="/journal/christmas-2021" element={<JournalPage id="christmas-2021"/>} />
      <Route path="/journal/alberta-2020" element={<JournalPage id="alberta-2020"/>} />
      <Route path="/journal/new-york-city" element={<JournalPage id="new-york-city"/>} />
      <Route path="/journal/san-francisco" element={<JournalPage id="san-francisco"/>} />
      <Route path="/journal/paris-2018" element={<JournalPage id="paris-2018"/>} />
      <Route path="/journal/dijon" element={<JournalPage id="dijon"/>} />
      <Route path="/journal/loire-valley" element={<JournalPage id="loire-valley"/>} />
      <Route path="/journal/monflanquin" element={<JournalPage id="monflanquin"/>} />
      <Route path="/journal/bordeaux" element={<JournalPage id="bordeaux"/>} />
    </Routes>
  );
}

export default App;
