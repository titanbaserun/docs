"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";
import { SidebarNav } from "@/components/Sidebar";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="flex h-14 items-center gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <img src="/titanbase.svg" alt="Titanbase" className="h-4 w-auto" />
          <span className="rounded-md bg-accent px-1.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-accent-ink">
            Docs
          </span>
        </Link>

        <div className="ml-auto flex items-center gap-1.5">
          <a href={site.home} className="hidden rounded-lg px-3 py-1.5 text-sm font-medium text-ink/70 transition-colors hover:text-ink sm:block">
            Home
          </a>
          <a href={site.editor} target="_blank" rel="noreferrer noopener" className="hidden rounded-lg px-3 py-1.5 text-sm font-medium text-ink/70 transition-colors hover:text-ink sm:block">
            Editor
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-panel text-ink transition-colors hover:border-muted"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-ink lg:hidden"
          >
            <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
              {open ? <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" /> : <path d="M3 6h14M3 10h14M3 14h14" strokeLinecap="round" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="max-h-[70vh] overflow-y-auto border-t border-line bg-bg px-4 py-5 lg:hidden">
          <SidebarNav onNavigate={() => setOpen(false)} />
        </div>
      )}
    </header>
  );
}
