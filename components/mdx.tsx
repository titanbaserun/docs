import Link from "next/link";
import type { ReactNode } from "react";

export function Cards({ children }: { children: ReactNode }) {
  return <div className="mt-6 grid gap-4 sm:grid-cols-2">{children}</div>;
}

export function Card({ title, href, children }: { title: string; href: string; children?: ReactNode }) {
  const external = href.startsWith("http");
  const inner = (
    <>
      <div className="flex items-center justify-between">
        <span className="font-semibold text-ink">{title}</span>
        <span className="text-muted transition-transform group-hover:translate-x-0.5">→</span>
      </div>
      {children && <p className="mt-1.5 text-sm leading-relaxed text-muted">{children}</p>}
    </>
  );
  const cls =
    "group block rounded-xl border border-line bg-panel p-5 no-underline transition-colors hover:border-brand/50";
  return external ? (
    <a href={href} target="_blank" rel="noreferrer noopener" className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

const calloutStyles = {
  note: { bar: "border-blue", bg: "bg-blue/5", label: "Note", labelColor: "text-blue" },
  tip: { bar: "border-brand", bg: "bg-accent/60", label: "Tip", labelColor: "text-accent-ink" },
  warning: { bar: "border-[#d99a26]", bg: "bg-[#fff7e8]", label: "Warning", labelColor: "text-[#9a6b12]" },
} as const;

export function Callout({
  type = "note",
  children,
}: {
  type?: keyof typeof calloutStyles;
  children: ReactNode;
}) {
  const s = calloutStyles[type];
  return (
    <div className={`mt-5 rounded-r-lg border-l-2 ${s.bar} ${s.bg} px-4 py-3`}>
      <p className={`text-xs font-bold uppercase tracking-wide ${s.labelColor}`}>{s.label}</p>
      <div className="mt-1 text-sm leading-relaxed text-ink/80 [&>p]:mt-0">{children}</div>
    </div>
  );
}
