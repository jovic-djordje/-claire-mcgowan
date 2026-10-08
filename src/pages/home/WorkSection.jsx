import "./home.style.css";
import OneColumnIcon from "../../components/icons/OneColumnIcon";
import TwoColumnIcon from "../../components/icons/TwoColumnIcon";
import FourGridIcon from "../../components/icons/FourGridIcon";
import NineGridIcon from "../../components/icons/NineGridIcon";
import { WorkImage, works } from "../../assets/images";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { navigateWithTransition } from "../../utils/transition";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WorkSection = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [gridView, setGridView] = useState(4);
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  // --- SCROLL ANIMACIJA: SVAKA KARTICA SE POJEDINAČNO OD MOTAVA ---
  useEffect(() => {
    const isMobile = window.innerWidth <= 650;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".work-card");

      cards.forEach((card) => {
        const image = card.querySelector(".work-card-image");
        const info = card.querySelector(".work-card-info");

        if (image) {
          // 1. Odmotavanje slike odozdo ka gore
          gsap.fromTo(
            image,
            {
              clipPath: "inset(100% 0 0 0)",
              scale: 1.12,
            },
            {
              clipPath: "inset(0% 0 0 0)",
              scale: 1,
              duration: isMobile ? 0.95 : 1.15,
              ease: "power3.inOut",
              scrollTrigger: {
                trigger: card,
                start: isMobile ? "top 92%" : "top 85%",
                toggleActions: isMobile
                  ? "play none none none"
                  : "play none none reverse",
              },
            },
          );
        }

        if (info) {
          // 2. Info bar (broj i ime) ulazi odozdo
          gsap.fromTo(
            info,
            {
              opacity: 0,
              y: 12,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: isMobile ? "top 92%" : "top 85%",
                toggleActions: isMobile
                  ? "play none none none"
                  : "play none none reverse",
              },
            },
          );
        }
      });

      // Osvežavamo ScrollTrigger kalkulacije čim browser složi layout
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 250);

      return () => clearTimeout(timer);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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

  const handleCardClick = (e, slug) => {
    e.preventDefault();
    navigateWithTransition(`/weddings/${slug}`, navigate);
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
        <a
          href={`/weddings/${work.slug}`}
          className="work-card-link"
          onClick={(e) => handleCardClick(e, work.slug)}
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
        </a>
      </article>
    );
  };

  return (
    <section className="work" ref={sectionRef}>
      <div className="work-section-holder">
        <div className="work-section-text-holder">
          <p>Selected Works</p>
          <p className="updated">Updated: 07.10.2026</p>
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
