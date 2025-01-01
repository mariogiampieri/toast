import type { SVGProps, JSX } from "react";
import { X, Github, Nextjs, Remix, Astro, TanStack } from "@/ui/icons";

export interface iDocsRoutes {
  category: string;
  routes: {
    title: string;
    path: string;
    icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  }[];
}

export const FrameworkGuides: iDocsRoutes[] = [
  {
    category: "Framework Guides",
    routes: [
      {
        title: "Astro",
        path: "/astro",
        icon: Astro,
      },
      {
        title: "Next.js",
        path: "/nextjs",
        icon: Nextjs,
      },
      {
        title: "Remix",
        path: "/remix",
        icon: Remix,
      },
      {
        title: "TanStack Start",
        path: "/tanstack",
        icon: TanStack,
      },
    ],
  },
];

export const SocialLinks: iDocsRoutes[] = [
  {
    category: "Social Links",
    routes: [
      {
        title: "Twitter",
        path: "https://twitter.com/pheralb_",
        icon: X,
      },
      {
        title: "GitHub",
        path: "https://github.com/pheralb/toast",
        icon: Github,
      },
    ],
  },
];

export const SidebarRoutes: iDocsRoutes[] = [
  {
    category: "Introduction",
    routes: [
      {
        title: "Getting Started",
        path: "/",
      },
    ],
  },
  ...FrameworkGuides,
  {
    category: "API",
    routes: [
      {
        title: "Toaster",
        path: "/toaster",
      },
      {
        title: "toast",
        path: "/toast",
      },
    ],
  },
  {
    category: "Customization",
    routes: [
      {
        title: "Dark Mode",
        path: "/dark-mode",
      },
      {
        title: "Toast Options",
        path: "/options",
      },
    ],
  },
];

export const allRoutes = [...SidebarRoutes, ...SocialLinks];
