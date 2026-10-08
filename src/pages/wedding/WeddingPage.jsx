import { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { works } from "../../assets/images";
import CurvedGallery from "../../components/CurvedGallery";
import { navigateWithTransition } from "../../utils/transition";
import "./wedding.style.css";

const WeddingPage = ({ isDark, toggleTheme }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const wedding = works.find((work) => work.slug === slug);
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // 1. Header elementi (broj, naslov, Close) uleću lagano odozdo
      gsap.from(".wedding-header > *", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        delay: 0.1,
        ease: "power3.out",
      });

      // 2. Curved galerija ulazi sa blagim skaliranjem
      gsap.from(".wedding-gallery-container", {
        opacity: 0,
        scale: 0.98,
        duration: 0.7,
        delay: 0.15,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, [slug]);

  const handleClose = (e) => {
    e.preventDefault();
    navigateWithTransition("/", navigate);
  };

  if (!wedding) {
    return (
      <main className="wedding-page">
        <p>Wedding not found.</p>
        <button type="button" className="back-link" onClick={handleClose}>
          Back to portfolio
        </button>
      </main>
    );
  }

  return (
    <main className="wedding-page" ref={containerRef}>
      <header className="wedding-header">
        <div className="wedding-title-box">
          <span className="wedding-number">
            {String(wedding.id).padStart(2, "0")}
          </span>
          <h2 className="subtitle">{wedding.couple}&apos;s Wedding</h2>
        </div>

        <button
          type="button"
          className="back-link"
          onClick={handleClose}
          aria-label="Close and return to home"
        >
          Close
        </button>
      </header>

      {/* Fluid WebGL Curved Gallery */}
      <section className="wedding-gallery-container">
        <CurvedGallery images={wedding.images} />
      </section>
    </main>
  );
};

export default WeddingPage;
