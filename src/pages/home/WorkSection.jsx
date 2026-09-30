import "./home.style.css";
import OneColumnIcon from "../../components/icons/OneColumnIcon";
import TwoColumnIcon from "../../components/icons/TwoColumnIcon";
import FourGridIcon from "../../components/icons/FourGridIcon";
import NineGridIcon from "../../components/icons/NineGridIcon";
import { WorkImage, works } from "../../assets/images";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import { useState, useEffect } from "react";

const WorkSection = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [gridView, setGridView] = useState(4);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1000px)");

    const handleScreenChange = (event) => {
      setGridView(event.matches ? 2 : 4);
    };

    handleScreenChange(mediaQuery);

    mediaQuery.addEventListener("change", handleScreenChange);

    return () => {
      mediaQuery.removeEventListener("change", handleScreenChange);
    };
  }, []);

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <section className="work">
      <div className="work-section-holder">
        <div className="work-section-text-holder">
          <p>Selected Works, 2026</p>

          <div className="square-holder">
            {/* Desktop: više kolona */}
            <div className="grid-controls grid-controls--desktop">
              <button
                className={`grid-button ${gridView === 3 ? "active" : ""}`}
                type="button"
                aria-label="Show portfolio in three columns"
                aria-pressed={gridView === 3}
                onClick={() => setGridView(3)}
              >
                <FourGridIcon className="grid-icon" />
              </button>

              <button
                className={`grid-button ${gridView === 4 ? "active" : ""}`}
                type="button"
                aria-label="Show portfolio in four columns"
                aria-pressed={gridView === 4}
                onClick={() => setGridView(4)}
              >
                <NineGridIcon className="grid-icon" />
              </button>
            </div>

            {/* Tablet i mobile: 2 ili 1 kolona */}
            <div className="grid-controls grid-controls--small">
              <button
                className={`grid-button ${gridView === 1 ? "active" : ""}`}
                type="button"
                aria-label="Show portfolio in one column"
                aria-pressed={gridView === 1}
                onClick={() => setGridView(1)}
              >
                <OneColumnIcon className="grid-icon" />
              </button>

              <button
                className={`grid-button ${gridView === 2 ? "active" : ""}`}
                type="button"
                aria-label="Show portfolio in two columns"
                aria-pressed={gridView === 2}
                onClick={() => setGridView(2)}
              >
                <TwoColumnIcon className="grid-icon" />
              </button>
            </div>
          </div>
        </div>
        <span className="divider"></span>

        <div className={`work-gallery work-gallery--${gridView}`}>
          {works.map((work) => (
            <article
              className={`work-card ${
                hoveredId && hoveredId !== work.id ? "is-dimmed" : ""
              }`}
              key={work.id}
            >
              <button
                className="work-card-link"
                type="button"
                aria-label={`View ${work.couple}'s wedding`}
                onPointerEnter={() => setHoveredId(work.id)}
                onPointerLeave={() => setHoveredId(null)}
                onPointerMove={handlePointerMove}
              >
                <WorkImage
                  src={work.image}
                  alt={work.alt}
                  className="work-card-image"
                />

                {hoveredId === work.id && (
                  <span
                    className="view-cursor"
                    aria-hidden="true"
                    style={{
                      left: `${cursorPosition.x}px`,
                      top: `${cursorPosition.y}px`,
                    }}
                  >
                    <HiMiniArrowSmallRight className="view-arrow" />
                    <span className="view-text">View</span>
                  </span>
                )}
              </button>

              <div className="work-card-info">
                <span>{String(work.id).padStart(2, "0")}</span>
                <p>
                  {work.couple}&apos;s <br />
                  Wedding
                </p>
              </div>
            </article>
          ))}
        </div>

        <span className="divider"></span>
      </div>
    </section>
  );
};

export default WorkSection;
