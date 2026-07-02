"use client"

import {
  FaFacebookF,
  FaWhatsapp,
  FaTelegramPlane,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";

import AnimatedLink from "./AnimatedLink";

import { useModal } from "../context/ModalContext";

export default function BottomBar() {
  const { setActiveModal } = useModal();

  return (
    <div className="py-10 px-20 h-[80%] w-full flex items-end justify-end fixed bottom-0 left-0 z-1">
      <div className="flex gap-15 w-1/2 h-full justify-end items-end">
        <div className="flex items-center font-medium text-gray-400/80 w-full/ /gap-8 /justify-between text-base">
          <AnimatedLink text="Terms Of Service" className="px-4" onClick={() => setActiveModal("terms")} />
          <AnimatedLink text="Cookie Preferences" className="px-4" onClick={() => setActiveModal("cookie")} />
          <AnimatedLink text="Privacy Policy" className="px-4" onClick={() => setActiveModal("privacy")} />
        </div>

        <div className="flex-col h-full flex items-center gap-3">
          <div className="bg-gray-500/30 rounded-full mb-5 w-1.25 h-full"></div>
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
