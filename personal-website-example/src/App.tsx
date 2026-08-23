import "./index.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { LanguageProvider } from "./components/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import TechStack from "./components/TechStack";
import MyService from "./components/MyService";
import Portfolio from "./components/Portfolio";
import Projects from "./components/Projects";
import FAQ from "./components/FAQ";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <Hero />
          <TechStack />
          <MyService />
          <AboutUs />
          <Portfolio />
          <Projects />
          <FAQ />
          <GetInTouch />
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
