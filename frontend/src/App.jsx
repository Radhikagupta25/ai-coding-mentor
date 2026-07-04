import { BrowserRouter, Routes, Route } from "react-router-dom";

import AIBackground from "./components/layout/AIBackground";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-[#020617] text-white overflow-x-hidden">
        <AIBackground />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;