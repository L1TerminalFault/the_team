"use client"

import {
  FaFacebookF,
  FaWhatsapp,
  FaTelegramPlane,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import { useEffect, useRef, useCallback } from "react";

import AnimatedLink from "./AnimatedLink";
import { useModalStore } from "@/store/useModalStore";

export default function BottomBar() {
  const { setActiveModal } = useModalStore();
  const traceRef = useRef<SVGPathElement>(null);
  const lengthRef = useRef(0);

  const handleScroll = useCallback(() => {
    const trace = traceRef.current;
    if (!trace || lengthRef.current === 0) return;

    const winScroll = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;

    let scrolled = 0;
    if (height > 0) {
      scrolled = Math.min(1, Math.max(0, winScroll / height));
    }

    const dashoffset = lengthRef.current - (scrolled * lengthRef.current);
    trace.style.strokeDashoffset = `${dashoffset}`;
  }, []);

  useEffect(() => {
    const trace = traceRef.current;
    if (!trace) return;

    // Delay to ensure SVG is rendered and measurable
    const raf = requestAnimationFrame(() => {
      const length = trace.getTotalLength();
      lengthRef.current = length;
      trace.style.strokeDasharray = `${length}`;
      trace.style.strokeDashoffset = `${length}`;

      // Attach listener
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll(); // Init
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="py-10 px-20 h-[80%] w-full flex items-end justify-end fixed bottom-0 left-0 z-1 pointer-events-none">
      <div className="flex gap-15 w-1/2 h-full justify-end items-end pointer-events-auto">
        <div className="hidden lg:flex items-center font-medium text-gray-400/80 w-full/ /gap-8 /justify-between text-base">
          <AnimatedLink text="Terms Of Service" className_="px-4" onClick={() => setActiveModal("terms")} />
          <AnimatedLink text="Cookie Preferences" className_="px-4" onClick={() => setActiveModal("cookie")} />
          <AnimatedLink text="Privacy Policy" className_="px-4" onClick={() => setActiveModal("privacy")} />
        </div>

        <div className="flex-col h-full flex items-center gap-3">
          <div className="mb-5 w-auto h-full flex justify-center items-end opacity-80" style={{ minHeight: "150px" }}>
            <svg
              width="20"
              height="100%"
              viewBox="0 0 20 200"
              preserveAspectRatio="none"
              className="h-full overflow-visible"
            >
              <defs>
                <linearGradient id="scroll-glow" x1="0%" y1="0%" x2="0%" y2="100%">
                  {/* Theme-matching grey/white glow */}
                  <stop offset="0%" stopColor="#666" stopOpacity="0" />
                  <stop offset="40%" stopColor="#ccc" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#fff" stopOpacity="1" />
                </linearGradient>
                <filter id="scroll-blur" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              {/* Dim background trace */}
              <path
                d="M 10,0 L 10,40 L 0,50 L 0,110 L 20,130 L 20,160 L 10,170 L 10,200"
                fill="none"
                stroke="#ffffff10"
                strokeWidth="2"
              />
              {/* Glowing animated trace */}
              <path
                ref={traceRef}
                d="M 10,0 L 10,40 L 0,50 L 0,110 L 20,130 L 20,160 L 10,170 L 10,200"
                fill="none"
                stroke="url(#scroll-glow)"
                strokeWidth="2.5"
                filter="url(#scroll-blur)"
              />
            </svg>
          </div>
          <Link href={"https://facebook.com"} target="_blank" className="p-2">
            <FaFacebookF size={23} className="text-gray-400/80" />
          </Link>
          <Link href={"https://whatsapp.com"} target="_blank" className="p-2">
            <FaWhatsapp size={23} className="text-gray-400/80" />
          </Link>
          <Link href={"https://t.me"} target="_blank" className="p-2">
            <FaTelegramPlane size={23} className="text-gray-400/80" />
          </Link>
          <Link href={"https://instagram.com"} target="_blank" className="p-2">
            <FaInstagram size={23} className="text-gray-400/80" />
          </Link>
          <Link href={"https://youtube.com"} target="_blank" className="p-2">
            <FaYoutube size={23} className="text-gray-400/80" />
          </Link>
        </div>
      </div>
    </div>
  );
}

