"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

// Hand-crafted traces inspired by Clerk's aesthetic:
// Mostly horizontal with angular kinks, T-junctions, and stubs
// Static visible lines with occasional traveling pulse
// Diverse opacity and length

const traceData = [
  // === Long horizontal spans ===
  { d: "M 0,120 L 320,120 L 330,130 L 600,130", opacity: 0.08 },
  { d: "M 400,280 L 750,280 L 760,270 L 1000,270", opacity: 0.12 },
  { d: "M 0,450 L 200,450 L 210,460 L 500,460 L 510,450 L 800,450", opacity: 0.06 },
  { d: "M 150,680 L 550,680 L 560,690 L 900,690", opacity: 0.1 },
  { d: "M 0,850 L 400,850 L 410,840 L 700,840", opacity: 0.07 },
  { d: "M 300,950 L 600,950 L 610,960 L 1000,960", opacity: 0.09 },
  { d: "M 0,50 L 400,50 L 410,60 L 650,60", opacity: 0.07 },
  { d: "M 250,320 L 500,320 L 510,310 L 700,310", opacity: 0.1 },

  // === Medium horizontal with kinks ===
  { d: "M 50,200 L 250,200 L 260,210 L 380,210", opacity: 0.15 },
  { d: "M 600,350 L 800,350 L 810,340 L 920,340", opacity: 0.1 },
  { d: "M 100,520 L 300,520 L 310,530 L 420,530", opacity: 0.05 },
  { d: "M 700,600 L 850,600 L 860,610 L 1000,610", opacity: 0.12 },
  { d: "M 0,750 L 180,750 L 190,740 L 350,740", opacity: 0.08 },
  { d: "M 650,100 L 900,100 L 910,110 L 1000,110", opacity: 0.09 },

  // === T-junction shapes (horizontal with a short vertical stub) ===
  { d: "M 200,180 L 350,180 L 350,210", opacity: 0.06 },
  { d: "M 600,500 L 750,500 L 750,470", opacity: 0.08 },
  { d: "M 100,700 L 250,700 L 250,730 L 250,700 L 400,700", opacity: 0.05 },
  { d: "M 800,820 L 900,820 L 900,790", opacity: 0.1 },

  // === L-shapes (horizontal to vertical turn) ===
  { d: "M 450,150 L 550,150 L 550,220", opacity: 0.07 },
  { d: "M 0,580 L 80,580 L 80,640", opacity: 0.04 },
  { d: "M 920,400 L 1000,400 L 1000,340", opacity: 0.06 },

  // === Short stubs ===
  { d: "M 200,80 L 280,80 L 290,90 L 330,90", opacity: 0.2 },
  { d: "M 800,160 L 870,160 L 880,170 L 920,170", opacity: 0.06 },
  { d: "M 450,400 L 530,400 L 540,390 L 580,390", opacity: 0.18 },
  { d: "M 50,580 L 120,580 L 130,590 L 170,590", opacity: 0.04 },
  { d: "M 900,500 L 960,500 L 970,510 L 1000,510", opacity: 0.14 },
  { d: "M 350,780 L 420,780 L 430,770 L 470,770", opacity: 0.11 },
  { d: "M 100,900 L 170,900 L 180,910 L 220,910", opacity: 0.06 },

  // === Zigzag horizontal accents ===
  { d: "M 0,380 L 60,380 L 70,370 L 130,370 L 140,380 L 280,380", opacity: 0.08 },
  { d: "M 500,250 L 560,250 L 570,260 L 630,260 L 640,250 L 750,250", opacity: 0.06 },

  // === Dotted node connectors (horizontal line ending in a small square-ish shape) ===
  { d: "M 700,900 L 820,900 L 830,890 L 840,900 L 850,890", opacity: 0.05 },
  { d: "M 50,150 L 150,150 L 160,140 L 170,150 L 180,140", opacity: 0.08 },

  // === Vertical accent traces (minority) ===
  { d: "M 150,0 L 150,80 L 160,90 L 160,150", opacity: 0.06 },
  { d: "M 850,300 L 850,380 L 840,390 L 840,450", opacity: 0.05 },
  { d: "M 500,700 L 500,780 L 510,790 L 510,850", opacity: 0.08 },
  { d: "M 950,0 L 950,60 L 940,70 L 940,120", opacity: 0.04 },

  // === Cross shapes (two perpendicular segments) ===
  { d: "M 300,480 L 400,480 M 350,450 L 350,510", opacity: 0.05 },
  { d: "M 750,650 L 830,650 M 790,620 L 790,680", opacity: 0.07 },
];

export default function ElectricTraces() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const paths = gsap.utils.toArray<SVGPathElement>(".electric-path");

    paths.forEach((path) => {
      const length = path.getTotalLength();

      // Static line: fully visible at base opacity
      gsap.set(path, {
        strokeDasharray: `${length} 0`,
        strokeDashoffset: 0,
      });

      // Very occasional pulse: a bright blip travels the line every 8-20s
      const pulseLength = length * 0.15;
      const blipDuration = 2 + Math.random() * 3;
      const blipDelay = 8 + Math.random() * 15;

      const tl = gsap.timeline({ repeat: -1, repeatDelay: blipDelay, delay: Math.random() * 12 });
      tl.set(path, {
          strokeDasharray: `${pulseLength} ${length}`,
          strokeDashoffset: length + pulseLength,
          opacity: parseFloat(path.dataset.opacity || "0.1") * 3,
        })
        .to(path, {
          strokeDashoffset: -pulseLength,
          duration: blipDuration,
          ease: "none",
        })
        .set(path, {
          strokeDasharray: `${length} 0`,
          strokeDashoffset: 0,
          opacity: parseFloat(path.dataset.opacity || "0.1"),
        });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="electric-glow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#666" stopOpacity="0" />
            <stop offset="50%" stopColor="#aaa" stopOpacity="1" />
            <stop offset="100%" stopColor="#666" stopOpacity="0" />
          </linearGradient>
          <filter id="glow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {traceData.map((t, i) => (
          <path
            key={i}
            className="electric-path"
            d={t.d}
            data-opacity={t.opacity}
            fill="none"
            stroke="url(#electric-glow)"
            strokeWidth={1}
            opacity={t.opacity}
            filter="url(#glow)"
          />
        ))}
      </svg>
    </div>
  );
}
