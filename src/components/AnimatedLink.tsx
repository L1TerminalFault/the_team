// "use client";
// 
// import React, { useRef } from "react";
// import Link from "next/link";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// 
// // Register the useGSAP hook
// gsap.registerPlugin(useGSAP);
// 
// export default function AnimatedLink({ text, to, onClick, className_ }: { text: string, to?: string, onClick?: (e: React.MouseEvent) => void, className_?: string }) {
//   const container = useRef<HTMLElement | null>(null);
//   const tl = useRef<gsap.core.Timeline | null>(null);
// 
//   // Split text into characters array
//   const chars = text.split("");
// 
//   useGSAP(
//     () => {
//       // Target characters cleanly using class selectors scoped to this container
//       const topChars = container.current?.querySelectorAll(".top-char");
//       const bottomChars = container.current?.querySelectorAll(".bottom-char");
// 
//       // Set initial state of bottom characters immediately
//       gsap.set(bottomChars, { yPercent: 170 });
// 
//       // Initialize the timeline inside a ref so event handlers can access it
//       tl.current = gsap.timeline({
//         paused: true,
//         defaults: { duration: 0.19, ease: "expo.inout" },
//       });
// 
//       tl.current
//         .to(topChars, {
//           yPercent: -170,
//           stagger: 0.02,
//         })
//         .to(
//           bottomChars,
//           {
//             yPercent: 0,
//             stagger: 0.02,
//           },
//           0,
//         ); // 0 ensures both staggers start playing at the exact same time
//     },
//     { scope: container },
//   );
// 
//   const onMouseEnter = () => tl.current?.play();
//   const onMouseLeave = () => tl.current?.reverse();
// 
//   const className = "relative inline-block overflow-hidden whitespace-nowrap px-5 uppercase tracking-tighter leading-[0.9375rem] cursor-pointer";
// 
//   const content = (
//     <>
//       {/* Top Layer */}
//       <div className="flex py-1">
//         {chars.map((char, i) => (
//           <span key={`top-${i}`} className="top-char inline-block">
//             {char === " " ? "\u00A0" : char}
//           </span>
//         ))}
//       </div>
// 
//       {/* Bottom Layer */}
//       <div className="absolute inset-0 flex px-5 py-1">
//         {chars.map((char, i) => (
//           <span key={`bottom-${i}`} className="bottom-char inline-block">
//             {char === " " ? "\u00A0" : char}
//           </span>
//         ))}
//       </div>
//     </>
//   );
// 
//   if (onClick) {
//     return (
//       <button
//         ref={container}
//         className={className}
//         onMouseEnter={onMouseEnter}
//         onMouseLeave={onMouseLeave}
//         onClick={onClick}
//       >
//         {content}
//       </button>
//     );
//   }
// 
//   return (
//     <Link
//       href={to || "#"}
//       ref={container}
//       className={className}
//       onMouseEnter={onMouseEnter}
//       onMouseLeave={onMouseLeave}
//     >
//       {content}
//     </Link>
//   );
// }


"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Register the useGSAP hook
gsap.registerPlugin(useGSAP);

interface AnimatedLinkProps {
  text: string;
  to?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className_?: string;
}

export default function AnimatedLink({ text, to, onClick, className_ }: AnimatedLinkProps) {
  // Use a union type to allow the ref to bind to both HTML button and anchor elements
  const container = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  // Split text into characters array
  const chars = text.split("");

  useGSAP(
    () => {
      if (!container.current) return;

      // Target characters cleanly using class selectors scoped to this container
      const topChars = container.current.querySelectorAll(".top-char");
      const bottomChars = container.current.querySelectorAll(".bottom-char");

      // Set initial state of bottom characters immediately
      gsap.set(bottomChars, { yPercent: 170 });

      // Initialize the timeline inside a ref so event handlers can access it
      tl.current = gsap.timeline({
        paused: true,
        defaults: { duration: 0.19, ease: "expo.inout" },
      });

      tl.current
        .to(topChars, {
          yPercent: -170,
          stagger: 0.02,
        })
        .to(
          bottomChars,
          {
            yPercent: 0,
            stagger: 0.02,
          },
          0,
        ); // 0 ensures both staggers start playing at the exact same time
    },
    { scope: container },
  );

  const onMouseEnter = () => tl.current?.play();
  const onMouseLeave = () => tl.current?.reverse();

  // Combined standard styles with your custom className_ prop if provided
  const baseClassName = "relative inline-block overflow-hidden whitespace-nowrap px-5 uppercase tracking-tighter leading-[0.9375rem] cursor-pointer";
  const finalClassName = className_ ? `${baseClassName} ${className_}` : baseClassName;

  const content = (
    <>
      {/* Top Layer */}
      <div className="flex py-1">
        {chars.map((char, i) => (
          <span key={`top-${i}`} className="top-char inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>

      {/* Bottom Layer */}
      <div className="absolute inset-0 flex px-5 py-1">
        {chars.map((char, i) => (
          <span key={`bottom-${i}`} className="bottom-char inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </>
  );

  if (onClick) {
    return (
      <button
        ref={container as React.RefObject<HTMLButtonElement | null>}
        className={finalClassName}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      >
        {content}
      </button>
    );
  }

  return (
    <Link
      href={to || "#"}
      ref={container as React.RefObject<HTMLAnchorElement | null>}
      className={finalClassName}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {content}
    </Link>
  );
}

