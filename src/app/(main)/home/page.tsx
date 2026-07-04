"use client";

import gsap from "gsap";
import { useEffect, useRef, Suspense } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import _3DGlass, { cubeState } from "@/components/3DBlackGlass";
import RouteModal from "./RouteModal";

import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import ProcessSection from "@/components/home/ProcessSection";
import ContactSection from "@/components/home/ContactSection";

gsap.registerPlugin(ScrollTrigger, SplitText);

const sections = [
  { id: "hero", Content: HeroSection, cubePosition: "left" },
  { id: "services", Content: ServicesSection, cubePosition: "right" },
  { id: "about", Content: AboutSection, cubePosition: "left" },
  { id: "process", Content: ProcessSection, cubePosition: "right" },
  { id: "contact", Content: ContactSection, cubePosition: "left" },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ensure initial styles are strictly enforced
      const initialLeft = sections[0].cubePosition === "left" ? "0%" : "50%";
      gsap.set(glassRef.current, { left: initialLeft });
      gsap.set(".cube-inner", { scale: 1, transformOrigin: "center center" });
      cubeState.speedMultiplier = 1;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      // Loop over sections to build dynamic transitions
      sections.forEach((sec, i) => {
        if (i === 0) return; // Skip the first section (initial state)

        const prevSec = sections[i - 1];
        if (prevSec.cubePosition !== sec.cubePosition) {
          const targetLeft = sec.cubePosition === "left" ? "0%" : "50%";
          const label = `t${i}`;

          // Add a tween to move the container to the new position smoothly
          tl.to(
            glassRef.current,
            { left: targetLeft, duration: 1, ease: "power1.inOut" },
            label,
          )
            // First Half: Shrink and speed up as it reaches the center (duration 0.5)
            .to(
              cubeState,
              { scale: 0.3, duration: 0.5, ease: "sine.inOut" },
              label,
            )
            .to(
              cubeState,
              { speedMultiplier: 10, duration: 0.5, ease: "sine.inOut" },
              label,
            )
            // Second Half: Grow and slow down as it moves from center to the remaining edge
            .to(
              cubeState,
              { scale: 1, duration: 0.5, ease: "sine.inOut" },
              `${label}+=0.5`,
            )
            .to(
              cubeState,
              { speedMultiplier: 1, duration: 0.5, ease: "sine.inOut" },
              `${label}+=0.5`,
            );
        } else {
          // If no change in cube position, still advance the timeline properly
          tl.to({}, { duration: 1 });
        }
      });

      // SplitText and Fade logic for all sections
      const textSections = gsap.utils.toArray<HTMLElement>(
        ".animate-text-section",
      );

      const splits = textSections.map((section) => {
        const split = new SplitText(section, { type: "words,chars" });

        const tlText = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 80%", // Start animating when top of section enters 85% down
            end: "bottom 20%", // End when bottom of section reaches 15% from top
            scrub: 2,
          },
          duration: 1,
          stagger: 2,
        });

        // Timeline: 0-40% = fade in, 40-60% = hold at center, 60-100% = fade out
        tlText
          .fromTo(
            split.chars,
            { opacity: 0, y: 60, scale: 0.8 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              stagger: 0.04,
              duration: 0.7,
              ease: "elastic.out(1, 0.5)",
            },
          )
          .to({}, { duration: 0.2 }) // Hold visible at center
          .to(split.chars, {
            opacity: 0,
            y: -60,
            scale: 0.8,
            stagger: 0.04,
            duration: 0.7,
            ease: "elastic.out(1, 0.5)",
          });

        return split;
      });

      return () => {
        splits.forEach((s) => s.revert());
      };
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-max flex flex-col items-center justify-center"
    >
      <Suspense fallback={<div></div>}>
        <RouteModal />
      </Suspense>

      {sections.map((sec) => (
        <div
          key={sec.id}
          className="w-full flex min-h-svh py-16 items-center justify-center"
        >
          {sec.cubePosition === "left" && (
            <div className="w-1/2 h-full border max-lg:hidden border-transparent"></div>
          )}
          <sec.Content />
          {sec.cubePosition === "right" && (
            <div className="w-1/2 h-full border max-lg:hidden border-transparent"></div>
          )}
        </div>
      ))}

      <div className="fixed top-0 max-lg:hidden pointer-events-none overflow-hidden flex w-full h-full z-1">
        <div
          ref={glassRef}
          className="flex absolute w-1/2 items-center justify-center h-full z-1 left-0"
        >
          <_3DGlass className="cube-inner size-full" />
        </div>
      </div>
    </div>
  );
}
