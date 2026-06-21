"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { flatNav } from "@/lib/site";

export function Pager() {
  const pathname = usePathname();
  const idx = flatNav.findIndex((i) => i.href === pathname);
  if (idx === -1) return null;
  const prev = idx > 0 ? flatNav[idx - 1] : null;
  const next = idx < flatNav.length - 1 ? flatNav[idx + 1] : null;

  return (
    <nav className="mt-16 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
      {prev ? (
        <Link href={prev.href} className="group rounded-xl border border-line bg-panel p-4 transition-colors hover:border-brand/40">
          <span className="text-xs text-muted">Previous</span>
          <span className="mt-1 block font-semibold text-ink group-hover:text-accent-ink">{prev.title}</span>
        </Link>
      ) : (
        <span />
      )}
      {next && (
        <Link href={next.href} className="group rounded-xl border border-line bg-panel p-4 text-right transition-colors hover:border-brand/40">
          <span className="text-xs text-muted">Next</span>
          <span className="mt-1 block font-semibold text-ink group-hover:text-accent-ink">{next.title}</span>
        </Link>
      )}
    </nav>
  );
}
