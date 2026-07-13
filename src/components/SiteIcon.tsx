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
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <path
        className="hs-draw hs-d1"
        d="M40 520 L340 250 L640 40"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="miter"
        fill="none"
      />

      <path
        className="hs-draw hs-d2"
        d="M40 540 L370 300 L580 100"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="miter"
        fill="none"
      />

      <line
        className="hs-draw hs-d3"
        x1="40"
        y1="40"
        x2="40"
        y2="540"
        stroke="currentColor"
        strokeWidth="8"
      />

      <line
        className="hs-draw hs-d4"
        x1="40"
        y1="540"
        x2="640"
        y2="540"
        stroke="currentColor"
        strokeWidth="8"
      />
    </svg>
  );
}
