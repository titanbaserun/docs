import type { Metadata } from "next";
import { Funnel_Display } from "next/font/google";
import { site } from "@/lib/site";
import { Header } from "@/components/Header";
import { SidebarNav } from "@/components/Sidebar";
import { Pager } from "@/components/Pager";
import { Toc } from "@/components/Toc";
import "./globals.css";

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-funnel",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Titanbase Docs",
    template: "%s · Titanbase Docs",
  },
  description:
    "Documentation for Titanbase — the open-source, local-first visual schema designer for relational databases.",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={funnelDisplay.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">
        <Header />
        <div className="mx-auto flex w-full max-w-[90rem]">
          {/* Sidebar */}
          <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-64 flex-none overflow-y-auto border-r border-line px-4 py-8 lg:block">
            <SidebarNav />
          </aside>

          {/* Content */}
          <main className="min-w-0 flex-1 px-5 py-10 sm:px-10 sm:py-14">
            <article className="mx-auto max-w-3xl">
              {children}
              <Pager />
              <footer className="mt-12 border-t border-line pt-6 text-sm text-muted">
                <a href={site.docsRepo} target="_blank" rel="noreferrer noopener" className="hover:text-ink">
                  Edit these docs on GitHub
                </a>
                <span className="mx-2 text-line">·</span>
                <span>Apache-2.0</span>
              </footer>
            </article>
          </main>

          {/* Table of contents */}
          <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-56 flex-none overflow-y-auto px-4 py-10 xl:block">
            <Toc />
          </aside>
        </div>
      </body>
    </html>
  );
}
