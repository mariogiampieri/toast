import Link from "next/link";

import { Logo } from "@/ui/icons";
import { cn } from "@/utils/cn";
import { SocialLinks } from "@/docs.config";

import { buttonVariants } from "@/ui/button";
import ExternalLink from "@/ui/externalLink";
import { ModeToggle } from "../modeToggle";
import SearchModal from "../search";
import ResponsiveSidebarMenu from "./sidebar/responsiveSidebarMenu";
import Customizer from "../playground/customizer/customizer";

const Header = () => {
  return (
    <nav
      className={cn(
        "sticky top-0 z-50 bg-neutral-50/90 backdrop-blur-sm dark:bg-neutral-900/90",
        "flex h-16 w-full",
        "border-b border-neutral-200 dark:border-neutral-800",
      )}
    >
      <div className="container flex max-w-7xl items-center justify-between">
        <div className="flex items-center">
          <ResponsiveSidebarMenu />
          <Link
            href="/"
            title="pheralb/toast"
            className="group flex items-center space-x-3 font-medium tracking-tight transition-opacity duration-75 hover:opacity-80"
          >
            <Logo width={22} className="group-hover:animate-pulse" />
            <span className="hidden text-neutral-700 md:block dark:text-neutral-300">
              pheralb/toast
            </span>
          </Link>
        </div>
        <div className="flex items-center space-x-0.5">
          {SocialLinks.map((link) =>
            link.routes.map((route) => (
              <ExternalLink
                key={route.path}
                title={route.title}
                href={route.path}
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon",
                  className: "group",
                })}
              >
                {route.icon && <route.icon height={18} width={18} />}
                <span className="sr-only">{route.title}</span>
              </ExternalLink>
            )),
          )}
          <Customizer />
          <SearchModal />
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Header;
