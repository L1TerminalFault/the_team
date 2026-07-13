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
  return (
    <svg
      id={id}
      className={`hero-symbol ${className}`}
      viewBox="0 0 680 560"
      fill="none"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <path
        className="hs-draw hs-d1"
        pathLength="1"
        d="M40 520 Q120 460 220 360 Q320 260 420 160 Q500 80 640 40"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      ></path>
      <path
        className="hs-draw hs-d2"
        pathLength="1"
        d="M40 540 Q160 480 300 360 Q440 240 580 100"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      ></path>
      <line
        className="hs-draw hs-d3"
        pathLength="1"
        x1="40"
        y1="40"
        x2="40"
        y2="540"
        stroke="currentColor"
        strokeWidth="2"
      ></line>
      <line
        className="hs-draw hs-d4"
        pathLength="1"
        x1="40"
        y1="540"
        x2="640"
        y2="540"
        stroke="currentColor"
        strokeWidth="2"
      ></line>
    </svg>
  );
}
