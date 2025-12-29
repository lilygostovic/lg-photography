import React from "react";

import { Route, Routes } from "react-router-dom";

import { Home, JournalPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* TODO:: Add photostream page similar to flickr's photostream */}
      <Route path="/journal/:id" element={<JournalPage />} />
    </Routes>
  );
}

export default App;
