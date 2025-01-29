import type { TableOfContentsProps } from "./types";

import TocMenu from "./tocMenu";
import { cn } from "@/utils/cn";

const TableOfContents = (props: TableOfContentsProps) => {
  return (
    <aside
      className={cn(
        "py-4",
        "fixed z-30 hidden h-[calc(100vh-4rem)] w-[150px] overflow-y-hidden text-sm xl:block",
        "bg-neutral-50 dark:bg-neutral-900",
        "flex items-end justify-end",
        "border-none",
      )}
    >
      <div className="flex flex-col py-5">
        <h2 className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
          On this page
        </h2>
        <TocMenu tocData={props.tocData} />
      </div>
    </aside>
  );
};

export default TableOfContents;
