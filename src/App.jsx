import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import WeddingPage from "./pages/wedding/WeddingPage";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(false);

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
      <Routes>
        <Route
          path="/"
          element={<Home isDark={isDark} toggleTheme={toggleTheme} />}
        />
        <Route
          path="/weddings/:slug"
          element={<WeddingPage isDark={isDark} toggleTheme={toggleTheme} />}
        />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
