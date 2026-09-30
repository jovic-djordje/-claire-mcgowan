import { HeroImg } from "../../assets/images";
import "./home.style.css";

const HeroSection = ({ isDark, toggleTheme }) => {
  return (
    <section className="hero">
      <div className="hero-section-holder">
        <div className="hero-left">
          <div className="title-holder">
            <button
              className={`switch ${isDark ? "switch--dark" : ""}`}
              type="button"
              onClick={toggleTheme}
              aria-label={
                isDark ? "Switch to light theme" : "Switch to dark theme"
              }
              aria-pressed={isDark}
            >
              <div className="btn-inner"></div>
            </button>
            <h1 className="title">Claire McGowan</h1>
          </div>
        </div>

        <div className="hero-right">
          <div className="text-holder">
            <div className="text">
              <p className="copy">
                I'm a documentary wedding photographer with 9+ years behind the
                camera, capturing love stories as they naturally unfold. I lead
                with instinct ,staying close to the action, blending into the
                background, and chasing the real, unscripted moments.
              </p>
              <p className="copy">
                I photograph weddings in a relaxed, candid style for couples
                across Newcastle, the North East, and the whole of the UK.
                Always grounded in genuine connection over posed perfection.
              </p>
              <p className="copy">
                I've captured countless weddings for couples who wanted their
                day told honestly not staged. Currently based in Newcastle upon
                Tyne, available for weddings nationwide and destination
                bookings.
              </p>
            </div>

            <div className="contact">
              <a href="mailto:hello@clairemcgowanweddings.com" className="mail">
                hello@clairemcgowanweddings.com
              </a>
              <a
                href="https://www.instagram.com/clairemcgowanweddings/"
                target="_blank"
              >
                Instagram
              </a>
            </div>
          </div>

          <HeroImg className="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
