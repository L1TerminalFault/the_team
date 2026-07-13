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
  <svg class="hero-symbol" viewBox="0 0 680 560" fill="none">
  <path
    class="hs-draw hs-d1"
    pathLength="1"
    d="M40 520
       L340 250
       L640 40"
    stroke="currentColor"
    stroke-width="3"
    stroke-linecap="round"
    stroke-linejoin="miter"
    fill="none" />

  <path
    class="hs-draw hs-d2"
    pathLength="1"
    d="M40 540
       L370 300
       L580 100"
    stroke="currentColor"
    stroke-width="1.2"
    stroke-linecap="round"
    stroke-linejoin="miter"
    fill="none" />

  <line
    class="hs-draw hs-d3"
    pathLength="1"
    x1="40"
    y1="40"
    x2="40"
    y2="540"
    stroke="currentColor"
    stroke-width="2" />

  <line
    class="hs-draw hs-d4"
    pathLength="1"
    x1="40"
    y1="540"
    x2="640"
    y2="540"
    stroke="currentColor"
    stroke-width="2" />
</svg>);
}
