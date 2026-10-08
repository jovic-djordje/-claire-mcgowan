import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import WeddingPage from "./pages/wedding/WeddingPage";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  const toggleTheme = () => {
    setIsDark((currentTheme) => !currentTheme);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDark);

    return () => {
      document.body.classList.remove("dark-theme");
    };
  }, [isDark]);

  return (
    <main className={`app ${isDark ? "app--dark" : ""}`}>
      <PageTransition>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={<Home isDark={isDark} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/weddings/:slug"
            element={<WeddingPage isDark={isDark} toggleTheme={toggleTheme} />}
          />
        </Routes>
      </PageTransition>
      <Footer />
    </main>
  );
}

export default App;
