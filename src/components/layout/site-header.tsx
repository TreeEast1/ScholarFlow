"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/explore", label: "Explore" },
  { href: "/trends", label: "Trends" },
  { href: "/paths", label: "Learning Paths" },
  { href: "/workspace", label: "Workspace" },
  { href: "/report-builder", label: "Report Builder" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-[rgba(245,247,250,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white">
            SF
          </div>
          <div>
            <div className="font-serif text-lg font-semibold tracking-tight text-slate-950">
              ScholarFlow
            </div>
            <div className="text-xs text-slate-500">
              Research onboarding and frontier tracking
            </div>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white/90 p-1.5 shadow-sm lg:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === item.href
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm text-slate-600 transition hover:text-slate-950",
                  active && "bg-slate-900 text-white hover:text-white",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
