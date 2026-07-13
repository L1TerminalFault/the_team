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
      id={id}
      className={`hero-symbol ${className}`}
      viewBox="0 0 680 560"
      fill="none"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <defs>
        <filter id={`svg-glow-${uniq}`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComponentTransfer in="blur" result="glow">
            <feFuncA type="linear" slope="1.5" />
          </feComponentTransfer>
          <feComposite in="SourceGraphic" in2="glow" operator="over" />
        </filter>
      </defs>

      {/* Y Axis */}
      <path
        className="hs-draw hs-axis-y"
        d="M 40,40 L 40,540"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
        filter={`url(#svg-glow-${uniq})`}
      ></path>

       {/* X Axis */}
       <path
        className="hs-draw hs-axis-x"
        d="M 40,540 L 640,540"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
        filter={`url(#svg-glow-${uniq})`}
      ></path>

      {/* Outer Trace (approximating asymptote with 3 turns) */}
      <path
        className="hs-draw hs-trace1"
        d="M 120,80 L 120,350 L 280,350 L 280,480 L 600,480"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
        filter={`url(#svg-glow-${uniq})`}
      ></path>

      {/* Inner Trace (3 turns) */}
      <path
        className="hs-draw hs-trace2"
        d="M 200,180 L 200,280 L 400,280 L 400,380 L 640,380"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
        filter={`url(#svg-glow-${uniq})`}
      ></path>
    </svg>
  );
}
