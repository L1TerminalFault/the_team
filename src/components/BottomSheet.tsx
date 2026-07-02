"use client";

import { MdClose } from "react-icons/md";
import { useModal } from "../context/ModalContext";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function BottomSheet({ children }: { children: React.ReactNode }) {
  const { setActiveModal } = useModal();
  const sheetRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    // Initial slide up animation
    gsap.fromTo(
      backdropRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: "power2.out" }
    );
    gsap.fromTo(
      sheetRef.current,
      { y: "100%" },
      { y: "0%", duration: 0.5, ease: "power3.out" }
    );
  }, []);

  const closeSheet = () => {
    // Slide down animation
    gsap.to(backdropRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.in"
    });
    gsap.to(sheetRef.current, {
      y: "100%",
      duration: 0.4,
      ease: "power3.in",
      onComplete: () => {
        setActiveModal(null);
      }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end pointer-events-none">
      {/* Backdrop */}
      <div 
        ref={backdropRef}
        className="absolute inset-0 backdrop-blur-md bg-black/40 pointer-events-auto"
        onClick={closeSheet}
      />
      
      {/* Sheet Content */}
      <div 
        ref={sheetRef}
        className="relative scrollbar-hidden w-full h-[80vh] bg-[#111111]/ lphone-back rounded-t-[40px] pointer-events-auto flex flex-col overflow-hidden border-t border-white/10 shadow-2xl"
      >
        <button 
          onClick={closeSheet}
          className="absolute top-6 right-8 text-white/50 hover:text-white transition-colors cursor-pointer p-2 rounded-full hover:bg-white/10 z-10"
        >
          <MdClose size={28} />
        </button>
        <div className="w-full h-full overflow-y-auto px-10/ p-16 scrollbar-hidden text-gray-200">
          {children}
        </div>
      </div>
    </div>
  );
}
