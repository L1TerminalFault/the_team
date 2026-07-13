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
        className="hs-draw hs-d1"
        d="M40 520 Q120 460 220 360 Q320 260 420 160 Q500 80 640 40"
        stroke="url(#glow-grad)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        filter="url(#svg-glow)"
      ></path>
      <path
        className="hs-draw hs-d2"
        d="M40 540 Q160 480 300 360 Q440 240 580 100"
        stroke="url(#glow-grad)"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        filter="url(#svg-glow)"
      ></path>
      <line
        className="hs-draw hs-d3"
        x1="40"
        y1="40"
        x2="40"
        y2="540"
        stroke="url(#glow-grad)"
        strokeWidth="2"
        filter="url(#svg-glow)"
      ></line>
      <line
        className="hs-draw hs-d4"
        x1="40"
        y1="540"
        x2="640"
        y2="540"
        stroke="url(#glow-grad)"
        strokeWidth="2"
        filter="url(#svg-glow)"
      ></line>
    </svg>
  );
}
