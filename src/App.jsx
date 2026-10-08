import { useEffect, useState, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import "./App.css";

// Dynamic lazy import za WeddingPage
const WeddingPage = lazy(() => import("./pages/wedding/WeddingPage"));

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
        <Suspense fallback={null}>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={<Home isDark={isDark} toggleTheme={toggleTheme} />}
            />
            <Route
              path="/weddings/:slug"
              element={
                <WeddingPage isDark={isDark} toggleTheme={toggleTheme} />
              }
            />
          </Routes>
        </Suspense>
      </PageTransition>
      <Footer />
    </main>
  );
}

export default App;
