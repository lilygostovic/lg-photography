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
      <Route path="/journal/:id" element={<JournalPage />} />
      <Route path="/lily" element={<div>hi my name is lily!</div>} />
    </Routes>
  );
}

export default App;
