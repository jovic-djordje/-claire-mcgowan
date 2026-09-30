import HeroSection from "./HeroSection";
import PortfolioSection from "./WorkSection";

const Home = ({ isDark, toggleTheme }) => {
  return (
    <>
      <HeroSection isDark={isDark} toggleTheme={toggleTheme} />
      <PortfolioSection />
    </>
  );
};

export default Home;
