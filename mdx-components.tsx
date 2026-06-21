import type { MDXComponents } from "mdx/types";
import Link from "next/link";

function slugify(children: React.ReactNode): string | undefined {
  if (typeof children !== "string") return undefined;
  return children
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mt-2 scroll-mt-24 text-3xl font-semibold tracking-tight text-ink sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        {children}
      </h1>
    ),
    h2: ({ children }) => {
      const id = slugify(children);
      return (
        <h2 id={id} className="group mt-12 scroll-mt-24 border-t border-line pt-10 text-2xl font-semibold tracking-tight text-ink" style={{ fontFamily: "var(--font-display)" }}>
          {children}
          {id && (
            <a href={`#${id}`} aria-label="Link to section" className="ml-2 text-muted opacity-0 transition-opacity group-hover:opacity-100">
              #
            </a>
          )}
        </h2>
      );
    },
    h3: ({ children }) => {
      const id = slugify(children);
      return (
        <h3 id={id} className="group mt-8 scroll-mt-24 text-lg font-semibold text-ink">
          {children}
          {id && (
            <a href={`#${id}`} aria-label="Link to section" className="ml-2 text-muted opacity-0 transition-opacity group-hover:opacity-100">
              #
            </a>
          )}
        </h3>
      );
    },
    p: ({ children }) => <p className="mt-4 leading-relaxed text-ink/80">{children}</p>,
    a: ({ href = "", children }) => {
      const external = href.startsWith("http");
      const cls = "font-medium text-accent-ink underline decoration-line underline-offset-2 hover:decoration-brand";
      return external ? (
        <a href={href} target="_blank" rel="noreferrer noopener" className={cls}>
          {children}
        </a>
      ) : (
        <Link href={href} className={cls}>
          {children}
        </Link>
      );
    },
    ul: ({ children }) => <ul className="mt-4 space-y-2 pl-1">{children}</ul>,
    ol: ({ children }) => <ol className="mt-4 list-decimal space-y-2 pl-5 text-ink/80">{children}</ol>,
    li: ({ children }) => (
      <li className="flex items-start gap-2.5 leading-relaxed text-ink/80 [ol_&]:list-item [ol_&]:pl-1">
        <span className="mt-2.5 hidden h-1.5 w-1.5 flex-none rounded-full bg-brand/60 [ul_&]:block" />
        <span className="min-w-0">{children}</span>
      </li>
    ),
    code: ({ children }) => (
      <code className="rounded bg-accent px-1.5 py-0.5 font-mono text-[0.85em] text-accent-ink">{children}</code>
    ),
    pre: ({ children }) => (
      <pre className="mt-5 overflow-x-auto rounded-xl border border-ink-line bg-ink-900 p-4 font-mono text-[13px] leading-relaxed text-zinc-200 [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-zinc-200">
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-5 rounded-r-lg border-l-2 border-brand bg-accent/50 px-4 py-2 text-ink/80">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="my-10 border-line" />,
    table: ({ children }) => (
      <div className="mt-6 overflow-x-auto rounded-xl border border-line">
        <table className="w-full border-collapse text-sm">{children}</table>
      </div>
    ),
    thead: ({ children }) => <thead className="bg-panel">{children}</thead>,
    th: ({ children }) => (
      <th className="border-b border-line px-4 py-2.5 text-left text-xs font-bold uppercase tracking-wide text-muted">
        {children}
      </th>
    ),
    td: ({ children }) => <td className="border-b border-line px-4 py-2.5 align-top text-ink/80">{children}</td>,
    ...components,
  };
}
