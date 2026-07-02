"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiTechcrunch } from "react-icons/si";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

import AnimatedLink from "./AnimatedLink";
import TopMenuSheet from "./TopMenuSheet";
import { useModalStore } from "@/store/useModalStore";

export default function TopBar() {
  const topBarRef = useRef<HTMLDivElement>(null);

  const { setActiveModal } = useModalStore();
  useEffect(() => {
    const ref = document.getElementById("ref");
    const tl = gsap.timeline({});
    gsap.set(".top-text", { opacity: 1 });

    tl.fromTo(
      ".icon",
      {
        scale: 2,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: "power4.inOut",
      },
    )
      .fromTo(
        ".icon",
        {
          size: 400,
        },
        {
          size: 45,
        },
      )
      .fromTo(
        ".text",
        {
          maxWidth: "0px",
        },
        {
          maxWidth: `1000px`,
          duration: 1.5,
          ease: "power1.out",
        },
      )
      .fromTo(
        ".top-text",
        {
          width: "100vw",
          top: 0,
          left: 0,
          height: "100vh",
          z: 100,
          // borderRadius: "0%",
          fontSize: "200px",
          opacity: 1,
        },
        {
          // width: `${ref?.getBoundingClientRect().width + 8}px`,
          // height: `${ref?.getBoundingClientRect().height}px`,
          // fontSize: "24px",
          // top: "40px",
          // left: "80px",
          // borderRadius: "9999px",
          opacity: 0,
          delay: 0.5,
          z: -500,
          duration: 2,
          ease: "power4.inOut",
        },
      );
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="py-10 px-8 md:px-20 w-full flex items-center justify-between fixed top-0 left-0 z-40 bg-transparent">
        <div className="top-text pointer-events-none fixed opacity-1 justify-center backdrop-blur-2xl bg-black/50 z-95 overflow-visible text-2xl font-extrabold text-gray-300 flex flex-row items-center gap-20">
          <SiTechcrunch className="icon size-100" />
          <div className="text inline-block overflow-x-clip h-max whitespace-nowrap tracking-tighter leading-3.75">
            THE TEAM
          </div>
        </div>

        <div className="flex w-full items-center gap-3 justify-between">
          <div
            id="ref"
            className="text-xl md:text-2xl font-extrabold text-gray-300 flex items-center gap-3 z-50 relative"
          >
            <SiTechcrunch className="size-8 md:size-11" />
            <AnimatedLink text="The Team" to="/home" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-5 w-auto lg:w-1/2 justify-end text-gray-300/80">
            <div className="flex items-center font-medium gap-4 lg:gap-8 justify-between text-base lg:text-lg mr-4">
              <AnimatedLink text="Order" onClick={() => setActiveModal("order")} />
              <AnimatedLink text="Contact Us" onClick={() => setActiveModal("contact")} />
              <AnimatedLink text="FAQ" onClick={() => setActiveModal("faq")} />
              <AnimatedLink text="About" onClick={() => setActiveModal("about")} />
            </div>

            <div className="flex rounded-full bg-black/20 p-1 shrink-0">
              <SignInButton mode="modal">
                <button className="rounded-l-full bg-white/2 px-5 py-2 cursor-pointer transition-colors hover:bg-white/10">Log In</button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="rounded-r-full px-5 py-2 cursor-pointer transition-colors hover:bg-white/10">Sign Up</button>
              </SignUpButton>
            </div>
          </div>

          {/* Mobile Nav Toggle */}
          <button 
            className="md:hidden flex flex-col gap-1.5 p-2 z-50 cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            <div className="w-6 h-0.5 bg-gray-300 rounded-full"></div>
            <div className="w-6 h-0.5 bg-gray-300 rounded-full"></div>
            <div className="w-6 h-0.5 bg-gray-300 rounded-full"></div>
          </button>
        </div>
      </div>
      <TopMenuSheet isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
