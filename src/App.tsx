import React from 'react';

import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import {
  HomePage,
  JournalPage,
} from './components';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/journal/:id" element={<JournalPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
