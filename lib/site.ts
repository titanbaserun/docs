export const site = {
  name: "Titanbase Docs",
  url: "https://docs.titanbase.run",
  home: "https://titanbase.run",
  editor: "https://app.titanbase.run",
  github: "https://github.com/titanbaserun/titanbase",
  docsRepo: "https://github.com/titanbaserun/docs",
} as const;

export type NavLink = { title: string; href: string };
export type NavGroup = { title: string; items: NavLink[] };

export const nav: NavGroup[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/" },
      { title: "Quickstart", href: "/quickstart" },
    ],
  },
  {
    title: "Concepts",
    items: [
      { title: "Architecture", href: "/concepts/architecture" },
      { title: "The IR model", href: "/concepts/ir" },
    ],
  },
  {
    title: "Reference",
    items: [
      { title: ".titan.json format", href: "/format" },
      { title: "Type system", href: "/format/types" },
      { title: "Exporters", href: "/exporters" },
      { title: "CLI", href: "/cli" },
    ],
  },
  {
    title: "Extend",
    items: [
      { title: "Plugin API", href: "/plugins" },
      { title: "Contributing", href: "/contributing" },
    ],
  },
];

export const flatNav: NavLink[] = nav.flatMap((g) => g.items);
