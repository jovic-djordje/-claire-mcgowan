import gsap from "gsap";

export const navigateWithTransition = (targetUrl, navigate) => {
  const overlay = document.querySelector(".page-transition-overlay");

  if (!overlay) {
    navigate(targetUrl);
    return;
  }

  // 1. Zavesa se diže odozdo i pokriva trenutnu stranu
  gsap.set(overlay, { display: "block" });

  gsap.fromTo(
    overlay,
    {
      scaleY: 0,
      transformOrigin: "bottom center",
    },
    {
      scaleY: 1,
      duration: 0.5,
      ease: "power4.inOut",
      onComplete: () => {
        // 2. Prebaci rutu tek kada je ceo ekran pokriven
        navigate(targetUrl);
      },
    },
  );
};
