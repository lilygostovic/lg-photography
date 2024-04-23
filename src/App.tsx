import React from "react";

import { Route, Routes } from "react-router-dom";

import { HomePage, JournalPage } from "./components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* TODO:: Add photostream page similar to flickr's photostream */}
      <Route path="/journal/:id" element={<JournalPage />} />
    </Routes>
  );
}

export default App;
