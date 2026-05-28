import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dm = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CareSync 24/7 — AI Healthcare Copilot",
  description:
    "Analyze symptoms, decode reports, track vitals, and get AI-powered healthcare guidance in one intelligent platform.",
  openGraph: {
    title: "CareSync 24/7",
    description: "Your AI Doctor, Available 24/7.",
    type: "website",
  },
  metadataBase: new URL("https://caresync24-7.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${syne.variable} ${dm.variable} min-h-screen bg-[#050b1a] text-white antialiased font-[family-name:var(--font-dm)]`}>
        <ClerkProvider>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}