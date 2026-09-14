import { useEffect } from "react";
import AllProjectsList from "../components/AllProjectsList";
import Footer from "../components/Footer";

export default function CaseStudiesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-black transition-colors duration-500">
      <div className="flex-1">
        <AllProjectsList />
      </div>
      <Footer />
    </main>
  );
}
