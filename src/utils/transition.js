import gsap from "gsap";

export const navigateWithTransition = (targetUrl, navigate) => {
  const overlay = document.querySelector(".page-transition-overlay");

  if (!overlay) {
    navigate(targetUrl);
    return;
  }

  gsap.set(overlay, { display: "block" });

  // 1. Zavesa se diže odozdo i prekriva trenutnu stranicu
  gsap.fromTo(
    overlay,
    {
      scaleY: 0,
      transformOrigin: "bottom center",
    },
    {
      scaleY: 1,
      duration: 0.6,
      ease: "power4.inOut",
      onComplete: () => {
        // 2. Prebacujemo rutu dok je ekran pokriven
        navigate(targetUrl);
      },
    },
  );
};
