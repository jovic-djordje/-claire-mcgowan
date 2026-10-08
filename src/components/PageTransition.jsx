import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import "./pageTransition.css";

const PageTransition = ({ children }) => {
  const location = useLocation();
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const content = contentRef.current;

    // Kada se promeni stranica, podigni zavesu ka gore
    gsap.set(overlay, { display: "block" });

    const tl = gsap.timeline();

    tl.fromTo(
      overlay,
      {
        scaleY: 1,
        transformOrigin: "bottom center",
      },
      {
        scaleY: 0,
        transformOrigin: "top center",
        duration: 0.65,
        ease: "power4.inOut",
        onComplete: () => {
          gsap.set(overlay, { display: "none", scaleY: 0 });
        },
      },
    ).fromTo(
      content,
      {
        opacity: 0.85,
        scale: 0.99,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      },
      "-=0.3",
    );

    return () => {
      tl.kill();
    };
  }, [location.pathname]);

  return (
    <>
      <div className="page-transition-overlay" ref={overlayRef} />
      <div className="page-transition-content" ref={contentRef}>
        {children}
      </div>
    </>
  );
};

export default PageTransition;
