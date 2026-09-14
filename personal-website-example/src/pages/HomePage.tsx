import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import MyService from "../components/MyService";
import AboutUs from "../components/AboutUs";
import Projects from "../components/Projects";
import FAQ from "../components/FAQ";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TechStack />
      <MyService />
      <AboutUs />
      <Projects />
      <FAQ />
      <GetInTouch />
      <Footer />
    </main>
  );
}
