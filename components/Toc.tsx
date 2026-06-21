"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type Heading = { id: string; text: string; level: number };

export function Toc() {
  const pathname = usePathname();
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("article h2[id], article h3[id]")
    );
    setHeadings(
      nodes.map((n) => ({
        id: n.id,
        text: n.textContent ?? "",
        level: n.tagName === "H2" ? 2 : 3,
      }))
    );

    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "0px 0px -75% 0px", threshold: 0 }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [pathname]);

  if (headings.length < 2) return null;

  return (
    <nav className="text-sm">
      <p className="mb-3 text-xs font-bold uppercase tracking-wider text-muted">On this page</p>
      <ul className="space-y-1.5 border-l border-line">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={`-ml-px block border-l-2 py-0.5 transition-colors ${
                h.level === 3 ? "pl-6" : "pl-3"
              } ${
                active === h.id
                  ? "border-brand font-medium text-accent-ink"
                  : "border-transparent text-muted hover:text-ink"
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
