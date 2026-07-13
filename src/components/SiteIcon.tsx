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
      <defs>
        <linearGradient id="glow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#666" stopOpacity="0" />
          <stop offset="50%" stopColor="#fff" stopOpacity="1" />
          <stop offset="100%" stopColor="#666" stopOpacity="0" />
        </linearGradient>
        <filter id="svg-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <path
        className="hs-draw hs-trace1"
        d="M 60,510 L 80,510 L 120,470 L 120,380 L 190,310 L 250,310 L 350,210 L 420,210 L 520,110 L 610,110 L 640,80"
        stroke="url(#glow-grad)"
        strokeWidth="10"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
        filter="url(#svg-glow)"
      ></path>
      <path
        className="hs-draw hs-trace2"
        d="M 60,530 L 110,530 L 170,470 L 210,470 L 290,390 L 340,390 L 450,280 L 500,280 L 580,200 L 640,200"
        stroke="url(#glow-grad)"
        strokeWidth="6"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
        filter="url(#svg-glow)"
      ></path>
      <path
        className="hs-draw hs-axis"
        d="M 40,40 L 40,540 L 640,540"
        stroke="url(#glow-grad)"
        strokeWidth="8"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
        filter="url(#svg-glow)"
      ></path>
    </svg>
  );
}
