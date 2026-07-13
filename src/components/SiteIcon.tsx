export default function SiteIcon({
  className = "",
  id,
  onMouseEnter,
  onMouseLeave,
}: {
  className?: string;
  id?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  const uniq = id || "base";
  return (
  <svg
      className="hero-symbol"
      viewBox="0 0 680 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main path */}
      <path
        className="hs-draw hs-d1"
        pathLength={1}
        d="M40 520 L340 250 L640 40"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="miter"
        fill="none"
      />

      {/* Secondary path */}
      <path
        className="hs-draw hs-d2"
        pathLength={1}
        d="M40 540 L370 300 L580 100"
        stroke="currentColor"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="miter"
        fill="none"
      />

      <line
        className="hs-draw hs-d3"
        pathLength={1}
        x1={40}
        y1={40}
        x2={40}
        y2={540}
        stroke="currentColor"
        strokeWidth={2}
      />

      <line
        className="hs-draw hs-d4"
        pathLength={1}
        x1={40}
        y1={540}
        x2={640}
        y2={540}
        stroke="currentColor"
        strokeWidth={2}
      />
    </svg>
  );
}
