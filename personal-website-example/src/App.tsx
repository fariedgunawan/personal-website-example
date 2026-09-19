import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { LanguageProvider } from "./components/LanguageContext";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CaseStudiesPage from "./pages/CaseStudiesPage";

import PricingPage from "./pages/PricingPage";

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Router>
          <div className="flex flex-col min-h-screen bg-white dark:bg-black transition-colors duration-500">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/pricing" element={<PricingPage />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
