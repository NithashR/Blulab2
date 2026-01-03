import React, { useEffect, useRef } from "react";
import CustomSVG2 from "./CustomSVG2"; // adjust path

function FloatingSVG({
  lockAt = 1000,          // scrollY where motion stops
  initialTop = 40,        // top offset in px
  leftOffset = 40,        // left offset in px (moves the svg to the left)
  parallaxFactor = 1,     // how fast it follows scroll (1 = 1:1)
  width = 500,
  height = 400,
  smoothing = 0.12,       // 0..1, smaller -> smoother but more delayed, 1 = immediate
}) {
  const elRef = useRef(null);
  const targetYRef = useRef(0);
  const currentYRef = useRef(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const maxTranslate = lockAt * parallaxFactor;

    // scroll handler only sets the target value (cheap)
    function onScroll() {
      const scrollY = window.scrollY || window.pageYOffset;
      const unclamped = scrollY * parallaxFactor;
      targetYRef.current = Math.min(unclamped, maxTranslate);
    }

    // initial target
    onScroll();

    // animation loop: lerp current -> target and apply transform
    function animate() {
      const el = elRef.current;
      if (!el) return;

      // simple lerp for smoothing
      const t = smoothing;
      currentYRef.current += (targetYRef.current - currentYRef.current) * t;

      // use translate3d for GPU acceleration
      const y = Math.round(currentYRef.current);
      // we only change transform (no layout thrash)
      el.style.transform = `translate3d(0px, ${y}px, 0px)`;

      rafRef.current = requestAnimationFrame(animate);
    }

    // watch scroll with passive listener, cheap
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [lockAt, parallaxFactor, smoothing]);

  // Inline styles chosen to avoid CSS file changes; you can move them to CSS.
  return (
    <div
      ref={elRef}
      style={{
        position: "fixed",             // fixed avoids layout reflow when updating transform
        top: `${initialTop}px`,
        left: `${leftOffset}px`,      // move it to the left
        width: `${width}px`,
        height: "auto",
        zIndex: 9999,
        pointerEvents: "none",
        transform: "translate3d(0px, 0px, 0px)", // initial transform
        willChange: "transform",
      }}
    >
      <CustomSVG2 width={width} height={height} />
    </div>
  );
}

export default FloatingSVG;