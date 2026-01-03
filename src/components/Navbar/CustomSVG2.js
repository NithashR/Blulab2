import * as React from "react";

const SvgIcon = (props) => {
  const [progress, setProgress] = React.useState(0); // 0..1 where 1 means scrolled SCROLL_MAX px or more
  const SCROLL_MAX = 1800; // changed to 1800px as requested
  const rafRef = React.useRef(null);
  const DEBUG_SCROLL = false; // set true to log scrollY/progress for debugging

  React.useEffect(() => {
    // guard for SSR
    if (typeof window === "undefined") return;

    const getScrollY = () =>
      window.scrollY ?? window.pageYOffset ?? document.documentElement.scrollTop ?? 0;

    const updateProgress = () => {
      const scrollY = getScrollY();
      const p = Math.min(1, scrollY / SCROLL_MAX);
      if (DEBUG_SCROLL) console.debug("scrollY:", scrollY, "progress:", p);
      setProgress(p);
    };

    const handleScroll = () => {
      // use requestAnimationFrame to avoid jank
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        updateProgress();
      });
    };

    // set initial progress in case user is already scrolled
    updateProgress();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []); // no deps

  // Points used for progressive connecting polyline (ensure they match square centers/translates)
  // Updated to include final top-right square (g82)
  const points = [
    { x: 133.19, y: 165.0 }, // approximate start near 'B' / left cluster
    { x: 165, y: 185 }, // intermediate
    { x: 206, y: 145 }, // intermediate
    { x: 235, y: 214.49 }, // final top-right square (g82)
  ];

  // Build segments and total length to reveal the polyline progressively across segments.
  const segments = [];
  let totalLen = 0;
  for (let i = 0; i < points.length - 1; i++) {
    const p = points[i];
    const q = points[i + 1];
    const dx = q.x - p.x;
    const dy = q.y - p.y;
    const len = Math.hypot(dx, dy);
    segments.push({ p, q, len });
    totalLen += len;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      id="svg2"
      width="491.3"
      height="398.011"
      version="1.1"
      viewBox="0 0 491.3 398.011"
      {...props}
    >
      <defs id="defs6">
        <clipPath id="clipPath18" clipPathUnits="userSpaceOnUse">
          <path id="path16" d="M0 298.508h368.475V0H0Z"></path>
        </clipPath>
      </defs>
      <g id="g10" transform="matrix(1.33333 0 0 -1.33333 0 398.01)">
        <g id="g12">
          <g id="g14" clipPath="url(#clipPath18)">
            <g id="g20" transform="translate(103.319 94.63)">
              <path
                id="path22"
                fill="#2ccaed"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0v-6.526h4.535c2.448 0 3.854 1.163 3.854 3.263C8.389-1.162 6.983 0 4.535 0Zm0 11.621V5.633h3.628c2.222 0 3.491 1.072 3.491 2.994s-1.269 2.994-3.491 2.994zm4.898 6.795c6.53 0 10.656-3.263 10.656-8.449 0-2.86-1.224-5.094-3.537-6.481v-.089c3.083-1.341 4.762-3.977 4.762-7.42 0-5.721-4.535-9.297-11.745-9.297H-8.434v31.736z"
              ></path>
            </g>
            <g id="g24" transform="translate(150.225 81.152)">
              <path
                id="path26"
                fill="#2ccaed"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0h-20.86v31.735h8.435V7.42H0Z"
              ></path>
            </g>
            <g id="g28" transform="translate(182.446 113.116)">
              <path
                id="path30"
                fill="#2ccaed"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0v-19.354c0-8.18-4.943-13.007-13.332-13.007s-13.332 4.827-13.332 13.007V0h8.435v-19.309c0-3.755 1.723-5.811 4.897-5.811s4.898 2.056 4.898 5.811V0Z"
              ></path>
            </g>
            <g id="g32" transform="translate(212.923 81.381)">
              <path
                id="path34"
                fill="#2ccaed"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0h-20.86v31.735h8.435V7.42H0Z"
              ></path>
            </g>
            <g id="g36" transform="translate(228.53 93.142)">
              <path
                id="path38"
                fill="#2ccaed"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0h6.712L3.446 12.828h-.091Zm-11.699-11.532 9.749 31.735H9.024l9.568-31.735H9.659L8.298-6.258h-9.885l-1.361-5.274z"
              ></path>
            </g>
            <g id="g40" transform="translate(263.988 94.93)">
              <path
                id="path42"
                fill="#2ccaed"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0v-6.526h4.535c2.448 0 3.854 1.163 3.854 3.263C8.389-1.162 6.983 0 4.535 0Zm0 11.621V5.633h3.628c2.222 0 3.491 1.072 3.491 2.994s-1.269 2.994-3.491 2.994zm4.898 6.795c6.53 0 10.656-3.263 10.656-8.449 0-2.86-1.224-5.094-3.537-6.481v-.089c3.083-1.341 4.762-3.977 4.762-7.42 0-5.721-4.535-9.297-11.745-9.297H-8.434v31.736z"
              ></path>
            </g>
            <g id="g44" transform="translate(145.216 61.196)">
              <path
                id="path46"
                fill="#b9bbbd"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-.457 1.258-1.293 1.914-2.434 1.914-1.693 0-2.663-1.385-2.663-3.773 0-2.369.97-3.774 2.587-3.774 1.14 0 2.053.712 2.567 2.006l3.061-1.259C2.13-7.219.039-8.585-2.567-8.585c-3.708 0-6.181 2.66-6.181 6.671 0 4.047 2.548 6.78 6.314 6.78 2.585 0 4.601-1.294 5.552-3.572z"
              ></path>
            </g>
            <g id="g48" transform="translate(156.664 57.605)">
              <path
                id="path50"
                fill="#b9bbbd"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c0 1.458-.59 2.333-1.521 2.333-.932 0-1.522-.875-1.522-2.333s.59-2.333 1.522-2.333C-.59-2.333 0-1.458 0 0m-6.465-.018c0 3.009 1.997 5.013 4.982 5.013 2.947 0 4.906-1.987 4.906-4.976 0-3.008-1.996-5.012-4.981-5.012-2.949 0-4.907 1.986-4.907 4.975"
              ></path>
            </g>
            <g id="g52" transform="translate(162.257 52.866)">
              <path
                id="path54"
                fill="#b9bbbd"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0v9.479h3.31v-.875c.78.766 1.654 1.13 2.72 1.13 2.015 0 3.251-1.349 3.251-3.572V0H5.858v5.76c0 .858-.381 1.312-1.102 1.312-.476 0-.933-.2-1.332-.583V0Z"
              ></path>
            </g>
            <g id="g56" transform="translate(178.06 62.6)">
              <path
                id="path58"
                fill="#b9bbbd"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c1.313 0 2.663-.364 3.88-1.057L2.548-3.281c-.892.566-1.729.875-2.377.875-.532 0-.874-.219-.874-.528 0-1.186 4.754-.584 4.754-3.829 0-1.932-1.693-3.226-4.221-3.226-1.484 0-3.042.437-4.374 1.24l1.332 2.223c1.045-.673 2.091-1.057 2.908-1.057.571 0 .933.202.933.529 0 1.184-4.754.601-4.754 3.828C-4.125-1.312-2.453 0 0 0"
              ></path>
            </g>
            <g id="g60" transform="translate(193.559 62.345)">
              <path
                id="path62"
                fill="#b9bbbd"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0v-9.479h-2.967l-.151.984c-.837-.838-1.769-1.239-2.871-1.239-2.036 0-3.292 1.349-3.292 3.572V0h3.424v-5.76c0-.858.38-1.314 1.103-1.314.456 0 .931.202 1.331.566V0z"
              ></path>
            </g>
            <g id="g64" transform="translate(199.53 55.964)">
              <path
                id="path66"
                fill="#b9bbbd"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0q0-.546.514-.546c.152 0 .342.037.513.092l.153-2.48c-.647-.2-1.35-.31-1.958-.31-1.713 0-2.645.875-2.645 2.498v10.59H0Z"
              ></path>
            </g>
            <g id="g68" transform="translate(201.7 62.345)">
              <path
                id="path70"
                fill="#b9bbbd"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0h1.56v2.57l3.423.638V0h2.129v-2.37H4.983v-3.61c0-.673.304-.984.951-.984.323 0 .78.092 1.103.201l.304-2.388c-.931-.309-1.826-.473-2.606-.473-2.054 0-3.175 1.057-3.175 2.989v4.265H0z"
              ></path>
            </g>
            <path
              id="path72"
              fill="#b9bbbd"
              fillOpacity="1"
              fillRule="nonzero"
              stroke="none"
              d="M211.057 62.345h3.423v-9.479h-3.423zm1.711.728c-1.084 0-1.863.73-1.863 1.75 0 1.022.779 1.75 1.863 1.75s1.864-.728 1.864-1.75c0-1.02-.78-1.75-1.864-1.75"
            ></path>
            <g id="g74" transform="translate(217.028 52.866)">
              <path
                id="path76"
                fill="#b9bbbd"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0v9.479h3.31v-.875c.78.766 1.654 1.13 2.72 1.13 2.015 0 3.251-1.349 3.251-3.572V0H5.858v5.76c0 .858-.381 1.312-1.102 1.312-.476 0-.933-.2-1.332-.583V0Z"
              ></path>
            </g>
            <g id="g78" transform="translate(234.791 56.348)">
              <path
                id="path80"
                fill="#b9bbbd"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0v2.971c-.439.419-.876.619-1.37.619-.97 0-1.521-.765-1.521-2.095S-2.34-.601-1.37-.601Q-.629-.601 0 0m0-2.206v.073c-.723-.674-1.541-1.003-2.491-1.003-2.302 0-3.823 1.823-3.823 4.612 0 2.862 1.597 4.776 3.974 4.776 1.046 0 1.864-.382 2.644-1.257l.152 1.002h2.967v-8.24c0-2.934-1.997-4.592-5.477-4.592-1.313 0-2.663.237-4.013.71l.913 2.461c1.064-.382 2.034-.583 2.91-.583C-.704-4.247 0-3.609 0-2.206"
              ></path>
            </g>
            <g id="g82" transform="translate(263.504 214.49)">
              <path
                id="path84"
                fill="#2f85c6"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c-4.775-4.779-15.209-1.678-21.292-2.863l-25.756-51.698c1.675-2.16 3.59-3.795 4.014-6.723.427-2.953.424-15.054-.404-17.613-1.153-3.565-4.264-5.764-7.955-6.081-3.281-.281-14.63-.385-17.296.591-2.947 1.078-4.843 3.616-5.496 6.625l.142 18.307 5.764 5.604-17.655 17.76-2.004-3.21-3.996-2.591c-.76.019-1.444-.328-2.203-.343-4.514-.09-13.575-.615-17.485.725-.859.294-1.434.866-2.247 1.153l-2.915 3.805-13.846-10.239 2.013-1.032.974-2.693c-.658-1.095.141-11.423-.189-13.847-.318-2.34-2.271-4.075-4.596-4.335-2.882-.324-10.175-.316-13.043.038-2.561.315-4.117 2.046-4.356 4.576-.217 2.309-.291 12.651.316 14.382.629 1.793 2.151 2.808 4.002 3.016 4.549.511 10.178-.263 14.819-.16l13.761 10.192.266.629c-.107.537-.304 1.048-.31 1.607-.054 4.595-.576 12.29.092 16.523.506 3.202 3.688 6.234 6.805 6.912 3.225.701 14.551.699 17.7-.117 3.223-.836 6.214-4.045 6.653-7.383.549-4.185.118-11.158.042-15.616-.011-.659-.28-1.249-.336-1.896l17.74-17.879 13.154.222 8.07-.921 25.89 51.969-8.441.156c-1.833 2.283-4.562 3.613-5.025 6.988.443 7.289-.686 15.45-.041 22.633.406 4.522 4.467 7.475 8.774 7.815 5.193.409 14.624.445 19.784-.017 5.032-.451 8.322-3.742 8.772-8.772.465-5.195.385-14.211.02-19.469C2.508 4.252 1.792 1.793 0 0"
              ></path>
            </g>
            <g id="g86" transform="translate(238.333 163.9)">
              <path
                id="path88"
                fill="#b2b4b7"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c3.247.548 16.627.509 19.993.048 2.917-.4 6.134-3.209 7.134-5.944 1.162-3.176 1.047-16.187.704-20.021-.37-4.131-3.472-8.609-7.809-9.098-4.275-.481-15.506-.481-19.78 0-4.358.491-7.442 4.992-7.809 9.098-.385 4.306-.411 12.911.034 17.181C-7.127-4.834-3.992-.674 0 0"
              ></path>
            </g>
            <g id="g90" transform="translate(190.774 246.802)">
              <path
                id="path92"
                fill="#2bcaed"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.569-.569 1.433-1.789 1.767-2.54 1.368-3.074 1.174-14.465.912-18.256-.378-5.473-3.596-8.942-9.094-9.408-3.82-.323-11.211-.35-15.002.015-3.805.366-7.328 2.847-8.361 6.631-.836 3.058-.736 14.267-.375 17.73.547 5.249 4.259 8.153 9.357 8.507 3.788.263 15.184.455 18.256-.912C-1.789 1.433-.569.569 0 0"
              ></path>
            </g>
            <g id="g94" transform="translate(194.63 212.387)">
              <path
                id="path96"
                fill="#2f85c6"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c2.444.413 11.082.381 13.614.049 2.672-.351 5.598-2.781 5.936-5.548.366-2.992.321-11.003-.007-14.044-.261-2.42-2.177-4.679-4.47-5.419-2.514-.812-14.06-.831-16.495.086-2.274.855-3.99 3.275-4.232 5.657-.305 3.014-.374 10.764.023 13.685C-5.263-2.833-2.651-.448 0 0"
              ></path>
            </g>

            <g id="g98" transform="translate(149.53 151.74)">
              <path
                id="path100"
                fill="#2ac9ee"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c1.035 1.022 2.434 1.559 3.877 1.705 3 .304 9.109.287 12.131.017 2.796-.25 5.54-2.354 5.897-5.269.352-2.879.27-9.81.005-12.78-.276-3.097-2.543-5.483-5.631-5.853-2.835-.341-8.881-.296-11.779-.047-2.555.219-4.939 1.5-5.953 3.936-.895 2.152-.814 10.815-.586 13.472C-1.891-3.096-1.243-1.228 0 0"
              ></path>
            </g>

            <g id="g102" transform="translate(118.39 212.706)">
              <path
                id="path104"
                fill="#2bcaed"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c2.147.36 9.498.35 11.699.048 2.827-.389 4.677-2.798 4.974-5.553.253-2.338.27-8.2-.029-10.501-.365-2.81-2.746-5.003-5.559-5.286-2.349-.237-10.634-.284-12.504.566-1.722.782-3.081 2.828-3.283 4.692-.254 2.34-.301 9.184.077 11.408C-4.247-2.407-2.234-.374 0 0"
              ></path>
            </g>

            <g id="g106" transform="translate(260.313 196.399)">
              <path
                id="path108"
                fill="#2bcaed"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c.315-.307 1.086-1.39 1.239-1.793.802-2.103.755-10.916-.105-12.988-.463-1.12-1.537-2.285-2.648-2.775-1.679-.741-9.54-.763-11.582-.484-2.671.364-4.418 2.271-4.665 4.904-.226 2.404-.244 7.521.011 9.902.237 2.21 2.023 4.358 4.3 4.632 2.166.26 8.703.271 10.824-.037C-1.698 1.227-.665.648 0 0"
              ></path>
            </g>

            <g id="g110" transform="translate(206.115 241.415)">
              <path
                id="path112"
                fill="#b2b4b7"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c1.8.302 7.308.299 9.146.049 2.486-.339 4.286-2.134 4.626-4.626.277-2.035.258-9.131-.653-10.775-.744-1.343-2.433-2.267-3.944-2.436-1.97-.221-6.992-.243-8.94-.006-2.207.268-4.046 2.088-4.299 4.313-.208 1.823-.265 8.154.073 9.816C-3.66-2.04-1.631-.274 0 0"
              ></path>
            </g>

            <g id="g114" transform="translate(141.684 229.606)">
              <path
                id="path116"
                fill="#3086c6"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c2.385.324 8.239.369 10.304-.696a4.1 4.1 0 0 0 2.221-3.202c.231-1.92.259-8.021-.028-9.875-.165-1.069-1.177-2.459-2.101-3.003-1.62-.954-8.394-.913-10.479-.687-2.37.256-4.334 1.86-4.633 4.299-.206 1.692-.236 7.947.081 9.505C-4.209-1.564-1.984-.27 0 0"
              ></path>
            </g>

            <g id="g118" transform="translate(134.024 254.173)">
              <path
                id="path120"
                fill="#21baf2"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c1.108.281 7.888.261 9.155.06 3.727-.593 3.352-7.522 3.049-10.35-.292-2.73-1.988-4.038-4.63-4.302-3.329-.333-9.527-.712-10.052 3.657-.192 1.6-.211 6.413.028 7.962C-2.275-1.837-1.121-.284 0 0"
              ></path>
            </g>

            <g id="g122" transform="translate(111.7 244.597)">
              <path
                id="path124"
                fill="#b2b4b7"
                fillOpacity="1"
                fillRule="nonzero"
                stroke="none"
                d="M0 0c2.176.339 6.874.525 8.009-1.711.539-1.064.586-7.244.12-8.332-1.022-2.384-9.158-2.317-10.562-.515-.887 1.138-.944 6.729-.615 8.183C-2.732-.981-1.29-.201 0 0"
              ></path>
            </g>

            {/* Connecting lines: reveal the polyline progressively across segments (cumulative). */}
            <g id="connecting-lines" style={{ pointerEvents: "none" }}>
              {segments.map((seg, i) => {
                const accBefore = segments
                  .slice(0, i)
                  .reduce((s, ss) => s + ss.len, 0);
                const revealedLen = progress * totalLen;
                const segProgress = Math.max(
                  0,
                  Math.min(1, (revealedLen - accBefore) / seg.len)
                );
                const dashArray = seg.len;
                const dashOffset = dashArray * (1 - segProgress);

                return (
                  <line
                    key={`line-${i}`}
                    x1={seg.p.x}
                    y1={seg.p.y}
                    x2={seg.q.x}
                    y2={seg.q.y}
                    stroke="#2f85c6"
                    strokeWidth={6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray={dashArray}
                    strokeDashoffset={dashOffset}
                    style={{
                      opacity: 0.98,
                      filter:
                        progress > 0
                          ? "drop-shadow(0 1px 1px rgba(0,0,0,0.08))"
                          : undefined,
                    }}
                  />
                );
              })}
            </g>
            {/* end artwork */}
          </g>
        </g>
      </g>
    </svg>
  );
};

export default SvgIcon;