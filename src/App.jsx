import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((currentTheme) => !currentTheme);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDark);
  }, [isDark]);

  return (
    <main className={`app ${isDark ? "app--dark" : ""}`}>
      <Home isDark={isDark} toggleTheme={toggleTheme} />
      <Footer />
    </main>
  );
}

export default App;
