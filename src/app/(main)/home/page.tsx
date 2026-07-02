"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import _3DGlass, { cubeState } from "@/components/3DBlackGlass";
import RouteModal from "./RouteModal";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ensure initial styles are strictly enforced
      gsap.set(glassRef.current, { left: "0%" });
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

      // Transition 1: sec1 to sec2 (Move Left to Right)
      tl.to(glassRef.current, { left: "50%", duration: 1, ease: "power1.inOut" }, "t1")
        //.to(".cube-inner", { width: "50%", height: "50%" }, "t1+=0.5")
        //.to(".cube-inner", { scale: 0.5, duration: 0.5, ease: "power1.inOut" }, "t1")
        //.to(".cube-inner", { scale: 1, duration: 0.5, ease: "power1.inOut" }, "t1+=0.5")
        //.to(cubeState, { speedMultiplier: 5, duration: 0.5, ease: "power1.in" }, "t1")
        //.to(cubeState, { speedMultiplier: 1, duration: 0.5, ease: "power1.out" }, "t1+=0.5");

      // Transition 2: sec2 to sec3 (Move Right to Left)
      tl.to(glassRef.current, { left: "0%", duration: 1, ease: "power1.inOut" }, "t2")
        //.to(".cube-inner", { width: "50%", height: "50%" }, "t2+=0.5")
        //.to(".cube-inner", { scale: 0.5, duration: 0.5, ease: "power1.inOut" }, "t2")
        //.to(".cube-inner", { scale: 1, duration: 0.5, ease: "power1.inOut" }, "t2+=0.5")
        //.to(cubeState, { speedMultiplier: 5, duration: 0.5, ease: "power1.in" }, "t2")
        //.to(cubeState, { speedMultiplier: 1, duration: 0.5, ease: "power1.out" }, "t2+=0.5");

      // Transition 3: sec3 to sec4 (Move Left to Right)
      tl.to(glassRef.current, { left: "50%", duration: 1, ease: "power1.inOut" }, "t3")
        //.to(".cube-inner", { width: "50%", height: "50%" }, "t3+=0.5")
        //.to(".cube-inner", { scale: 0.5, duration: 0.5, ease: "power1.inOut" }, "t3")
        //.to(".cube-inner", { scale: 1, duration: 0.5, ease: "power1.inOut" }, "t3+=0.5")
        //.to(cubeState, { speedMultiplier: 5, duration: 0.5, ease: "power1.in" }, "t3")
        //.to(cubeState, { speedMultiplier: 1, duration: 0.5, ease: "power1.out" }, "t3+=0.5");

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-max flex flex-col items-center justify-center">
      <RouteModal />

      <div className="sec1 w-full flex min-h-svh items-center justify-center">
        <div className="w-1/2 h-full max-lg:hidden"></div>
        <div className="text-3xl flex p-10 flex-col overflow gap-13 lg:w-1/2 z-1">
          <div className="text-gray-200 font-bold text-7xl">
            Elevating Brands Beyond Ordinary
          </div>
          <div className="text-gray-300/60 text-lg max-w-[67%]">
            Modern websites, creative media, social content, and scalable
            digital experiences designed to help brands stand out in a
            fast-moving digital world. Phase 1 of our unified architecture.
          </div>
        </div>
      </div>

      <div className="sec2 w-full flex min-h-svh items-center justify-center">
        <div className="text-3xl flex p-10 flex-col overflow gap-13 lg:w-1/2 z-1">
          <div className="text-gray-200 font-bold text-7xl">
            Designing Fluid Experiences
          </div>
          <div className="text-gray-300/60 text-lg max-w-[67%]">
            Modern websites, creative media, social content, and scalable
            digital experiences designed to help brands stand out in a
            fast-moving digital world. Phase 2 of our unified architecture.
          </div>
        </div>
        <div className="w-1/2 h-full max-lg:hidden"></div>
      </div>

      <div className="sec3 w-full flex min-h-svh items-center justify-center">
        <div className="w-1/2 h-full max-lg:hidden"></div>
        <div className="text-3xl flex p-10 flex-col overflow gap-13 lg:w-1/2 z-1">
          <div className="text-gray-200 font-bold text-5xl">
            Merging Art With Code
          </div>
          <div className="text-gray-300/60 text-lg max-w-[67%]">
            Modern websites, creative media, social content, and scalable
            digital experiences designed to help brands stand out in a
            fast-moving digital world. Phase 3 of our unified architecture.
          </div>
        </div>
      </div>

      <div className="sec4 w-full flex min-h-svh items-center justify-center">
        <div className="text-3xl flex p-10 flex-col overflow gap-13 lg:w-1/2 z-1">
          <div className="text-gray-200 font-bold text-5xl">
            Delivering Exceptional Quality
          </div>
          <div className="text-gray-300/60 text-lg max-w-[67%]">
            Modern websites, creative media, social content, and scalable
            digital experiences designed to help brands stand out in a
            fast-moving digital world. Phase 4 of our unified architecture.
          </div>
        </div>
        <div className="w-1/2 h-full max-lg:hidden"></div>
      </div>

      <div className="fixed top-0 max-lg:hidden pointer-events-none overflow-hidden flex w-full h-full z-1">
        <div ref={glassRef} className="flex absolute w-1/2 items-center justify-center h-full z-1 left-0">
          <_3DGlass className="cube-inner size-full" />
        </div>
      </div>
    </div>
  );
}
