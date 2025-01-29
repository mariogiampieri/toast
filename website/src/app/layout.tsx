import type { ReactNode } from "react";
import type { Metadata } from "next";
import { docsSettings } from "@/docs.config";

// Styles:
import "@/styles/globals.css";
import { cn } from "@/utils/cn";
import { fontHeadings, fontMono, fontSans } from "@/ui/fonts";

// Fonts:

// Providers:
import { ThemeProvider } from "@/providers/themeProvider";
import ToasterProvider from "@/providers/toasterProvider";

// Layout:
import Header from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar/sidebar";

export const metadata: Metadata = {
  metadataBase: new URL(docsSettings.websiteUrl),
  icons: [
    { rel: "icon", type: "ico", url: "/images/favicon.ico" },
    { rel: "icon", type: "image/svg+xml", url: "/images/logo_svg.svg" },
    {
      rel: "apple-touch-icon",
      url: "/images/sizes/apple-touch-icon-180x180.png",
    },
  ],
  robots: "follow, index",
  alternates: {
    canonical: "/",
  },
  title: {
    default: "@pheralb/toast",
    template: "%s - @pheralb/toast",
  },
  description: docsSettings.websiteDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          `${fontSans.variable} ${fontHeadings.variable} ${fontMono.variable}`,
          "font-sans antialiased",
          "bg-neutral-50 dark:bg-neutral-900",
          "text-neutral-900 dark:text-neutral-50",
          "selection:bg-neutral-200 dark:selection:bg-neutral-800",
          "selection:text-neutral-900 dark:selection:text-neutral-50",
          "scroll-smooth",
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="container relative w-full max-w-7xl">
            <aside className="hidden md:block">
              <Sidebar />
            </aside>
            <div className="relative ml-0 gap-0 md:ml-[250px] lg:gap-10 xl:grid xl:grid-cols-[1fr,150px]">
              {children}
            </div>
          </main>
          <ToasterProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}
