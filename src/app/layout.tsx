import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asymptote Creative",
  description: "We build brands, manage digital presence, and deliver the ERP System — a complete framework for performance, reach, and results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        theme: dark,
      }}
    >
      <html
        lang="en"
        className={`${ /* geistSans.variable geistMono.variable */} ${montserrat.variable} flex h-full antialiased`}
      >
        <body className="h-full w-full flex flex-col">{children}</body>
      </html>
    </ClerkProvider>
  );
}
