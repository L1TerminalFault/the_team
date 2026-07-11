"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiTechcrunch } from "react-icons/si";
import { SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";

import AnimatedLink from "./AnimatedLink";
import TopMenuSheet from "./TopMenuSheet";
import { useModalStore } from "@/store/useModalStore";

const company_name: string = "ASYMPTOTE CREATIVE";

export default function TopBar() {
  const topBarRef = useRef<HTMLDivElement>(null);

  const { setActiveModal } = useModalStore();
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    // Ensure splash is visible
    gsap.set(".intro-splash", { opacity: 1, pointerEvents: "all" });
    gsap.set(".splash-icon", { scale: 0, opacity: 0 });
    gsap.set(".splash-tagline", { opacity: 0, y: 20 });
    gsap.set(".splash-brand", { opacity: 0, y: 10 });

    tl
      // Phase 1: Icon blooms in at center
      .to(".splash-icon", {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "elastic.out(1, 0.6)",
      })
      // Phase 2: Tagline fades in below
      .to(".splash-brand", {
        opacity: 1,
        y: 0,
        duration: 0.6,
      }, "-=0.4")
      .to(".splash-tagline", {
        opacity: 1,
        y: 0,
        duration: 0.6,
      }, "-=0.3")
      // Phase 3: Hold for a beat
      .to({}, { duration: 0.6 })
      // Phase 4: Icon shrinks and moves to topbar corner
      .to(".splash-icon", {
        scale: 0.35,
        x: () => {
          const target = document.getElementById("ref");
          if (!target) return -window.innerWidth / 2 + 80;
          const rect = target.getBoundingClientRect();
          return rect.left + 16 - window.innerWidth / 2;
        },
        y: () => {
          const target = document.getElementById("ref");
          if (!target) return -window.innerHeight / 2 + 50;
          const rect = target.getBoundingClientRect();
          return rect.top + 16 - window.innerHeight / 2;
        },
        duration: 0.8,
        ease: "power4.inOut",
      })
      .to(".splash-tagline", { opacity: 0, y: -10, duration: 0.3 }, "-=0.8")
      .to(".splash-brand", { opacity: 0, y: -10, duration: 0.3 }, "-=0.7")
      // Phase 5: Overlay fades away
      .to(".intro-splash", {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          gsap.set(".intro-splash", { pointerEvents: "none", display: "none" });
        },
      });
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="py-10 px-8 md:px-20 w-full flex items-center justify-between fixed top-0 left-0 z-40 bg-transparent">
        <div className="intro-splash fixed inset-0 z-[95] flex flex-col items-center justify-center bg-black pointer-events-none opacity-0">
          <SiTechcrunch className="splash-icon size-28 md:size-36 text-white" />
          <div className="splash-brand mt-6 text-2xl md:text-3xl font-extrabold tracking-tight text-white">
            {company_name}
          </div>
          <div className="splash-tagline mt-3 text-sm md:text-base font-light tracking-widest uppercase text-gray-500">
            Always approaching perfection
          </div>
        </div>

        <div className="flex w-full items-center gap-3 justify-between">
          <div
            id="ref"
            className="text-xl md:text-2xl font-extrabold text-gray-300 flex items-center gap-3 z-50 relative"
          >
            <SiTechcrunch className="size-8 md:size-11" />
            <AnimatedLink text={company_name} to="/home" />
          </div>

          {/* Mobile Nav Toggle */}
          <button
            className="xl:hidden flex flex-col gap-1.5 p-2 z-50 cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            <div className="w-6 h-0.5 bg-gray-300 rounded-full"></div>
            <div className="w-6 h-0.5 bg-gray-300 rounded-full"></div>
            <div className="w-6 h-0.5 bg-gray-300 rounded-full"></div>
          </button>

          {/* Desktop Nav */}
          <div className="flex items-center gap-5 w-auto lg:w-1/2 justify-end text-gray-300/80">
            <div className="hidden xl:flex items-center w-full font-medium gap-4 lg:gap-8 justify-between text-base lg:text-lg mr-4">
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
