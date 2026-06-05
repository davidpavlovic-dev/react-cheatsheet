import { HashRouter, Route, Routes } from "react-router-dom";

import CheatDetailPage from "./pages/CheatDetailPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import { cheats } from "./utils/loadCheats.js";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage cheats={cheats} />} />
        <Route path="/cheats/:cheatId" element={<CheatDetailPage cheats={cheats} />} />
        <Route path="*" element={<CheatDetailPage cheats={cheats} />} />
      </Routes>
    </HashRouter>
  );
}
