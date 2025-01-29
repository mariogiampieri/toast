import type { ToC } from "./types";

import Link from "next/link";
import { cn } from "@/utils/cn";

const TocMenu = (props: { tocData: ToC[] }) => {
  return (
    <ul className="flex flex-col overflow-y-auto">
      {props.tocData.map((heading) => (
        <Link
          key={heading.slug}
          href={`#${heading.slug}`}
          title={heading.text}
          className={cn(
            "px-4 py-2 text-sm",
            "border-l border-neutral-200 hover:border-neutral-800 dark:border-neutral-800 dark:hover:border-neutral-200",
            "text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white",
            "bg-transparent",
          )}
        >
          {heading.text}
        </Link>
      ))}
    </ul>
  );
};

export default TocMenu;
