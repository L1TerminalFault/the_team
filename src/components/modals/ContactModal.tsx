import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const contactLinks = [
  {
    icon: MdEmail,
    label: "Email",
    value: "reach@asymptotecreative.com",
    href: "mailto:reach@asymptotecreative.com",
  },
  {
    icon: MdPhone,
    label: "Phone",
    value: "+251 944 806 913",
    href: "tel:+251944806913",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+251 944 806 913",
    href: "https://wa.me/251944806913",
    external: true,
  },
  {
    icon: FaTelegramPlane,
    label: "Telegram",
    value: "@AsymptoteCreative",
    href: "https://t.me/AsymptoteCreative",
    external: true,
  },
];

export default function ContactModal() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-8 text-white">Contact Us</h1>
      <p className="text-gray-400 text-lg mb-10 max-w-lg">
        Reach out through any of the channels below — we&apos;d love to hear about your project.
      </p>
      <div className="flex flex-col gap-4">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="group flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-colors"
          >
            <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 text-white group-hover:bg-white/15 transition-colors shrink-0">
              <link.icon size={22} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium tracking-wider uppercase text-gray-500 mb-0.5">
                {link.label}
              </span>
              <span className="text-white text-base font-light">
                {link.value}
              </span>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
