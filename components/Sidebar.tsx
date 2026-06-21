"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/site";

export function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  return (
    <nav className="space-y-7">
      {nav.map((group) => (
        <div key={group.title}>
          <h4 className="px-3 text-xs font-bold uppercase tracking-wider text-muted">{group.title}</h4>
          <ul className="mt-2 space-y-0.5">
            {group.items.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    className={`block rounded-lg px-3 py-1.5 text-sm transition-colors ${
                      active
                        ? "bg-accent font-semibold text-accent-ink"
                        : "text-ink/70 hover:bg-panel hover:text-ink"
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
