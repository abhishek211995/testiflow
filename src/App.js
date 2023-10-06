import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

import ShortCodeListPage from "./pages/ShortCodeListPage";
import GenerateShortCodePage from "./pages/GenerateShortCodePage";
import TfPreferences from "./pages/Preferences";
import TfDocumentation from "./pages/Documentation";

const App = () => {
  return (
    <HashRouter hashType="slash">
      <Routes>
        <Route
          path="/"
          element={<ShortCodeListPage />}
        ></Route>
        <Route
          path="/create-shortcode"
          element={<GenerateShortCodePage />}
        />
        <Route
          path="/preferences"
          element={<TfPreferences />}
        />
        <Route
          path="/docs"
          element={<TfDocumentation />}
        />
      </Routes>
    </HashRouter>
  );
};
export default App;
