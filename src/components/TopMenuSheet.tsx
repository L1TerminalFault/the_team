"use client";

import { MdClose } from "react-icons/md";
import AnimatedLink from "./AnimatedLink";
import { useModalStore } from "@/store/useModalStore";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";

export default function TopMenuSheet({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { setActiveModal } = useModalStore();
  const sheetRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(backdropRef.current, { opacity: 0, display: "block" }, { opacity: 1, duration: 0.4, ease: "power2.out" });
      gsap.fromTo(sheetRef.current, { y: "-100%" }, { y: "0%", duration: 0.5, ease: "power3.out" });
    } else {
      gsap.to(backdropRef.current, { opacity: 0, duration: 0.4, ease: "power2.in", onComplete: () => gsap.set(backdropRef.current, { display: "none" }) });
      gsap.to(sheetRef.current, { y: "-100%", duration: 0.4, ease: "power3.in" });
    }
  }, [isOpen]);

  const handleLink = (modal: string) => {
    onClose();
    setTimeout(() => {
      setActiveModal(modal);
    }, 400); // Wait for menu to slide up before opening modal
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-start pointer-events-none lg:hidden">
      {/* Backdrop */}
      <div 
        ref={backdropRef}
        className="absolute inset-0 backdrop-blur-md bg-black/60 pointer-events-auto hidden"
        onClick={onClose}
      />
      
      {/* Sheet Content */}
      <div 
        ref={sheetRef}
        className="relative w-full h-[60vh] bg-[#111111]/90 backdrop-blur-xl rounded-b-[40px] pointer-events-auto flex flex-col overflow-hidden border-b border-white/10 shadow-2xl -translate-y-full"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-8 text-white/50 hover:text-white transition-colors cursor-pointer p-2 rounded-full hover:bg-white/10 z-10"
        >
          <MdClose size={28} />
        </button>
        <div className="w-full h-full flex flex-col items-center justify-center gap-8 py-10 text-gray-200">
          <div className="flex flex-col items-center font-medium gap-8 text-2xl">
            <AnimatedLink text="Order" onClick={() => handleLink("order")} />
            <AnimatedLink text="Contact Us" onClick={() => handleLink("contact")} />
            <AnimatedLink text="FAQ" onClick={() => handleLink("faq")} />
            <AnimatedLink text="About" onClick={() => handleLink("about")} />
            <AnimatedLink text="Terms Of Service" className_="px-4" onClick={() => setActiveModal("terms")} />
            <AnimatedLink text="Cookie Preferences" className_="px-4" onClick={() => setActiveModal("cookie")} />
            <AnimatedLink text="Privacy Policy" className_="px-4" onClick={() => setActiveModal("privacy")} />
          </div>

          <div className="flex rounded-full bg-black/40 p-1 mt-4">
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
  );
}
