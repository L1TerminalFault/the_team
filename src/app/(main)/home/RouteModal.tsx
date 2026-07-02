"use client";

import { useModal } from "@/context/ModalContext";
import BottomSheet from "@/components/BottomSheet";
import AboutModal from "@/components/modals/AboutModal";
import ContactModal from "@/components/modals/ContactModal";
import FaqModal from "@/components/modals/FaqModal";
import OrderModal from "@/components/modals/OrderModal";
import TermsModal from "@/components/modals/TermsModal";
import CookieModal from "@/components/modals/CookieModal";
import PrivacyModal from "@/components/modals/PrivacyModal";

export default function RouteModal() {
  const { activeModal } = useModal();

  if (!activeModal) return null;

  let content = null;

  if (activeModal === "about") {
    content = <AboutModal />;
  } else if (activeModal === "contact") {
    content = <ContactModal />;
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
