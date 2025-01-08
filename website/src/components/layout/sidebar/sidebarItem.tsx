"use client";

import { cn } from "@/utils/cn";
import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItemProps extends LinkProps {
  title: string;
}

const SidebarItem = (props: SidebarItemProps) => {
  const pathname = usePathname();
  return (
    <Link
      className={cn(
        "px-4 py-2 text-sm",
        "border-l border-neutral-200 hover:border-neutral-800 dark:border-neutral-800 dark:hover:border-neutral-200",
        "transition-colors",
        "text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white",
        pathname.replace(/\/$/, "") === props.href.toString().replace(/\/$/, "")
          ? "border-black font-medium text-black dark:border-white dark:text-white"
          : "bg-transparent",
      )}
      {...props}
    >
      {props.title}
    </Link>
  );
};

export default SidebarItem;
