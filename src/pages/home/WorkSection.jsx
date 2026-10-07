import "./home.style.css";
import OneColumnIcon from "../../components/icons/OneColumnIcon";
import TwoColumnIcon from "../../components/icons/TwoColumnIcon";
import FourGridIcon from "../../components/icons/FourGridIcon";
import NineGridIcon from "../../components/icons/NineGridIcon";
import { WorkImage, works } from "../../assets/images";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

  const renderCard = (work) => {
    if (!work) return null;
    return (
      <article
        className={`work-card ${
          hoveredId && hoveredId !== work.id ? "is-dimmed" : ""
        }`}
        key={work.id}
      >
        <Link
          className="work-card-link"
          to={`/weddings/${work.slug}`}
          aria-label={`View ${work.couple}'s wedding`}
          onPointerEnter={() => setHoveredId(work.id)}
          onPointerLeave={() => setHoveredId(null)}
          onPointerMove={handlePointerMove}
        >
          {/* Gornji bar sa ( 01 ) i View → */}
          <div className="work-card-info">
            <div className="work-card-title-box">
              <span className="work-card-number">
                {String(work.id).padStart(2, "0")}
              </span>
              <span className="work-card-couple">{work.couple}</span>
            </div>
          </div>

          {/* Kontejner slike sa custom cursorom */}
          <div className="work-card-image-wrapper">
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
          </div>
        </Link>
      </article>
    );
  };

  return (
    <section className="work">
      <div className="work-section-holder">
        <div className="work-section-text-holder">
          <p>Selected Works</p>
          <p className="updated">Updated: 07.10.2026</p>

          {/*  <div className="square-holder">
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
          </div> */}
        </div>

        <span className="divider"></span>

        {/* --- WORK 7-COLUMN ASYMMETRICAL LAYOUT --- */}
        <div className="work-grid">
          {/* Red 1: Kolone 1, 3, 5, 7 */}
          <div className="work-grid-row">
            <div className="col-1">{renderCard(works[0])}</div>
            <div className="col-3">{renderCard(works[1])}</div>
            <div className="col-5">{renderCard(works[2])}</div>
            <div className="col-7">{renderCard(works[3])}</div>
          </div>

          {/* Red 2: Kolone 2, 4, 6 */}
          <div className="work-grid-row">
            <div className="col-2">{renderCard(works[4])}</div>
            <div className="col-4">{renderCard(works[5])}</div>
            <div className="col-6">{renderCard(works[6])}</div>
          </div>

          {/* Red 3: Kolone 3, 5 */}
          <div className="work-grid-row">
            <div className="col-3">{renderCard(works[7])}</div>
            <div className="col-5">{renderCard(works[8])}</div>
          </div>

          {/* Red 4: Kolone 2, 4, 6 */}
          <div className="work-grid-row">
            <div className="col-2">{renderCard(works[9])}</div>
            <div className="col-4">{renderCard(works[10])}</div>
            <div className="col-6">{renderCard(works[11])}</div>
          </div>
        </div>

        <span className="divider"></span>
      </div>
    </section>
  );
};

export default WorkSection;
