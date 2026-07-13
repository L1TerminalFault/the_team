"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiTechcrunch } from "react-icons/si";
import { SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

import SiteIcon from "./SiteIcon";
import { useCubeStore } from "@/store/useCubeStore";

gsap.registerPlugin(DrawSVGPlugin);

import AnimatedLink from "./AnimatedLink";
import TopMenuSheet from "./TopMenuSheet";
import { useModalStore } from "@/store/useModalStore";

const company_name: string = "ASYMPTOTE CREATIVE";

export default function TopBar() {
  const topBarRef = useRef<HTMLDivElement>(null);

  const { setActiveModal } = useModalStore();
  const isCubeLoaded = useCubeStore((state) => state.isCubeLoaded);
  const [introPhaseFinished, setIntroPhaseFinished] = useState(false);

  useEffect(() => {
    // Phase 1: Intro draw and fade
    // Note: CSS now starts .intro-splash with opacity-100 pointer-events-auto to prevent FOUC.
    gsap.set(".splash-icon", { scale: 1 });
    gsap.set(".splash-tagline", { opacity: 0, x: -20 });
    gsap.set(".splash-brand", { opacity: 0, x: -20 });
    // Initialize paths at 0 draw
    gsap.set(".splash-icon .hs-draw", { drawSVG: "0%" });

    const tlItems = gsap.timeline({
      onComplete: () => setIntroPhaseFinished(true),
    });

    tlItems
      .to(".splash-icon .hs-draw", {
        drawSVG: "100%",
        duration: 1.5,
        ease: "power2.inOut",
        stagger: 0.15,
      })
      .to(".splash-brand", { opacity: 1, x: 0, duration: 0.8 }, "-=0.5")
      .to(".splash-tagline", { opacity: 1, x: 0, duration: 0.8 }, "-=0.6");
  }, []);

  useEffect(() => {
    if (introPhaseFinished && isCubeLoaded) {
      const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
      tl.to({}, { duration: 0.6 }) // Phase 3: Hold for a beat
        .to(".splash-icon", {
          scale: 0.35,
          x: () => {
            const target = document.getElementById("ref-icon");
            const start = document.querySelector(".splash-icon");
            if (!target || !start) return window.innerWidth / -2 + 80;
            const targetRect = target.getBoundingClientRect();
            const startRect = start.getBoundingClientRect();
            return targetRect.left + targetRect.width / 2 - (startRect.left + startRect.width / 2);
          },
          y: () => {
            const target = document.getElementById("ref-icon");
            const start = document.querySelector(".splash-icon");
            if (!target || !start) return window.innerHeight / -2 + 50;
            const targetRect = target.getBoundingClientRect();
            const startRect = start.getBoundingClientRect();
            return targetRect.top + targetRect.height / 2 - (startRect.top + startRect.height / 2);
          },
          duration: 0.8,
          ease: "power4.inOut",
        })
        .to([".splash-tagline", ".splash-brand"], { opacity: 0, x: 20, duration: 0.3 }, "-=0.8")
        .to(".intro-splash", {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => {
            gsap.set(".intro-splash", { pointerEvents: "none", display: "none" });
          },
        });
    }
  }, [introPhaseFinished, isCubeLoaded]);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="py-10 px-8 md:px-20 w-full flex items-center justify-between fixed top-0 left-0 z-40 bg-transparent">
        <div className="intro-splash fixed inset-0 z-[95] flex flex-col items-center justify-center bg-black opacity-100 pointer-events-auto">
          <div className="flex flex-row items-center justify-center gap-6 md:gap-8">
            <SiteIcon className="splash-icon shrink-0 size-24 md:size-32 text-white" />
            <div className="flex flex-col">
              <div className="splash-brand text-2xl md:text-4xl font-extrabold tracking-tight text-white whitespace-nowrap">
                {company_name}
              </div>
              <div className="splash-tagline mt-1 md:mt-2 text-xs md:text-sm font-light tracking-widest uppercase text-gray-500 whitespace-nowrap">
                Always approaching perfection
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center gap-3 justify-between">
          <div
            id="ref"
            className="text-xl md:text-2xl font-extrabold text-gray-300 flex items-center gap-3 z-50 relative cursor-pointer group"
            onMouseEnter={() => {
              gsap.fromTo("#ref-icon .hs-draw", { drawSVG: "0%" }, { drawSVG: "100%", duration: 1, ease: "power2.out", stagger: 0.1 });
            }}
          >
            <SiteIcon id="ref-icon" className="size-8 md:size-11" />
            <AnimatedLink text={company_name} to="/home" />
          </div>

          {/* Desktop Nav */}
          <div className="flex items-center gap-5 w-auto lg:w-1/2 justify-end text-gray-300/80">

            {/* Mobile Nav Toggle */}
            <button
              className="xl:hidden flex flex-col gap-1.5 p-2 z-50 cursor-pointer"
              onClick={() => setMenuOpen(true)}
            >
              <div className="w-6 h-0.5 bg-gray-300 rounded-full"></div>
              <div className="w-6 h-0.5 bg-gray-300 rounded-full"></div>
              <div className="w-6 h-0.5 bg-gray-300 rounded-full"></div>
            </button>

            <div className="hidden xl:flex items-center w-full font-medium gap-4 lg:gap-8 justify-between text-base lg:text-lg mr-4">
              <AnimatedLink
                text="Projects"
                onClick={() => setActiveModal("projects")}
              />
              <AnimatedLink
                text="Order"
                onClick={() => setActiveModal("order")}
              />
              <AnimatedLink
                text="Contact Us"
                onClick={() => setActiveModal("contact")}
              />
              <AnimatedLink text="FAQ" onClick={() => setActiveModal("faq")} />
              <AnimatedLink
                text="About"
                onClick={() => setActiveModal("about")}
              />
            </div>

            <div className="flex rounded-full bg-black/20 p-1 shrink-0">
	    <Show when="signed-out">
              <SignInButton mode="modal">
                <button className="rounded-l-full bg-white/2 px-5 py-2 cursor-pointer transition-colors hover:bg-white/10">
                  Log In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="rounded-r-full px-5 py-2 cursor-pointer transition-colors hover:bg-white/10">
                  Sign Up
                </button>
              </SignUpButton>
            </Show>
	    					<Show when="signed-in">
						<UserButton
							showName
							appearance={{
								elements: {
									userButtonOuterIdentifier: {
										color: "gray",
									},
								},
							}}
						/>
					</Show>

            </div>
          </div>
        </div>
      </div>
      <TopMenuSheet isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
