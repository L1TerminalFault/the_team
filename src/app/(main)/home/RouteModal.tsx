"use client";

import BottomSheet from "@/components/BottomSheet";
import AboutModal from "@/components/modals/AboutModal";
import ContactModal from "@/components/modals/ContactModal";
import FaqModal from "@/components/modals/FaqModal";
import OrderModal from "@/components/modals/OrderModal";
import { useRef, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import gsap from "gsap";
import TermsModal from "@/components/modals/TermsModal";
import CookieModal from "@/components/modals/CookieModal";
import PrivacyModal from "@/components/modals/PrivacyModal";
import ProjectsModal from "@/components/modals/ProjectsModal";
import { useModalStore } from "@/store/useModalStore";

export default function RouteModal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const RouteContext = gsap.context(() => {});

  const path = usePathname();
  const searchParams = useSearchParams();
  const lastPathRef = useRef("");
  const initialLoadRef = useRef(true);

  const { activeModal } = useModalStore();

  if (!activeModal) return null;

  let content = null;

  if (activeModal === "about") {
    content = <AboutModal />;
  } else if (activeModal === "contact") {
    content = <ContactModal />;
  } else if (activeModal === "projects") {
    content = <ProjectsModal />;
  } else if (activeModal === "faq") {
    content = <FaqModal />;
  } else if (activeModal === "order") {
    content = <OrderModal />;
  } else if (activeModal === "terms") {
    content = <TermsModal />;
  } else if (activeModal === "cookie") {
    content = <CookieModal />;
  } else if (activeModal === "privacy") {
    content = <PrivacyModal />;
  }

  return <BottomSheet>{content}</BottomSheet>;
}
