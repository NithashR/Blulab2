import React, { useRef, useEffect } from "react";

const AnimatedSquares = () => {
  const lineRef = useRef(null);

  // Scroll animation
  useEffect(() => {
    const path = lineRef.current;
    if (!path) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      path.style.strokeDashoffset = length * (1 - progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ height: "2000px", display: "flex", justifyContent: "center" }}>
      <svg
        viewBox="0 0 500 500"
        width="500"
        height="500"
        style={{ display: "block", position: "sticky", top: "50px" }}
      >
        {/* Scroll animated line */}
        <path
          ref={lineRef}
          d="M103 95 L150 81 L182 113 L213 81 L229 93 L264 95"
          stroke="#2f85c6"
          strokeWidth="2"
          fill="transparent"
        />

        {/* Squares from your SVG */}
        <rect x="103" y="95" width="10" height="10" fill="#2ccaed" />
        <rect x="150" y="81" width="10" height="10" fill="#2ccaed" />
        <rect x="182" y="113" width="10" height="10" fill="#2ccaed" />
        <rect x="213" y="81" width="10" height="10" fill="#2ccaed" />
        <rect x="229" y="93" width="10" height="10" fill="#2ccaed" />
        <rect x="264" y="95" width="10" height="10" fill="#2f85c6" />
      </svg>
    </div>
  );
};

export default AnimatedSquares;
