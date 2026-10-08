import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import "./pageTransition.css";

const PageTransition = ({ children }) => {
  const location = useLocation();
  const overlayRef = useRef(null);
  const contentRef = useRef(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Preskačemo animaciju na prvo učitavanje sajta
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const overlay = overlayRef.current;
    const content = contentRef.current;

    // Timeline: zavesa se povlači nagore i otkriva novu stranicu
    const tl = gsap.timeline();

    tl.set(overlay, {
      scaleY: 1,
      transformOrigin: "bottom center",
      display: "block",
    })
      .set(content, {
        opacity: 0,
        scale: 0.98,
      })
      .to(overlay, {
        scaleY: 0,
        transformOrigin: "top center",
        duration: 0.75,
        ease: "power4.inOut",
      })
      .to(
        content,
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4",
      )
      .set(overlay, { display: "none" });

    return () => {
      tl.kill();
    };
  }, [location.pathname]);

  return (
    <>
      {/* Zavesa koja pravi Framer wipe efekat */}
      <div className="page-transition-overlay" ref={overlayRef} />
      <div className="page-transition-content" ref={contentRef}>
        {children}
      </div>
    </>
  );
};

export default PageTransition;
