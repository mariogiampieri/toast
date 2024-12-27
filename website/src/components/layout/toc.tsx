import { cn } from "@/utils/cn";
import Link from "next/link";

interface ToC {
  level?: number;
  text?: string;
  slug?: string;
}

interface TableOfContentsProps {
  tocData: ToC[];
}

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
      </div>
    </aside>
  );
};

export default TableOfContents;
