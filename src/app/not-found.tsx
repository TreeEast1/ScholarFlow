import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
      <div className="space-y-3">
        <div className="text-sm uppercase tracking-[0.3em] text-slate-400">404</div>
        <h1 className="font-serif text-5xl font-semibold tracking-tight text-slate-950">
          Topic not found
        </h1>
        <p className="max-w-xl text-sm leading-7 text-slate-600">
          The requested route does not exist in this MVP. Use explore to browse
          available research directions.
        </p>
      </div>
      <Button asChild className="rounded-full">
        <Link href="/explore">Go to explore</Link>
      </Button>
    </div>
  );
}
