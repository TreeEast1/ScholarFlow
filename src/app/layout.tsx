import type { Metadata } from "next";
import { Cormorant_Garamond, Instrument_Sans } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { WorkspaceProvider } from "@/components/providers/workspace-provider";
import "./globals.css";

const bodyFont = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ScholarFlow",
  description:
    "ScholarFlow is a beginner-friendly research onboarding and frontier-tracking platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#f4f7fb_25%,#ffffff_100%)] text-slate-900 antialiased">
        <WorkspaceProvider>
          <div className="min-h-screen">
            <SiteHeader />
            <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8">{children}</main>
            <SiteFooter />
          </div>
        </WorkspaceProvider>
      </body>
    </html>
  );
}
