import { cn } from "@/utils/cn";
import type { ReactNode } from "react";

interface ArticleProps {
  children: ReactNode;
  className?: string;
}
const Article = (props: ArticleProps) => {
  return (
    <article
      className={cn(
        "py-8",
        "prose prose-neutral dark:prose-invert",
        "prose-headings:font-bold prose-headings:font-headings prose-headings:tracking-tight prose-headings:scroll-mt-24",
        "prose-h1:mb-0 prose-h2:mb-5 prose-h2:font-semibold",
        "prose-a:underline-offset-[4px] prose-a:decoration-solid dark:prose-a:decoration-neutral-500 prose-a:decoration-neutral-400",
        "prose-figure:my-1 prose-p:mb-3 prose-p:text-pretty",
        "prose-ol:mb-0",
        "prose-th:text-start",
        "prose-pre:my-0 prose-pre:rounded-t-none prose-pre:border prose-pre:border-neutral-200 prose-pre:dark:border-neutral-800",
        "prose-inline-code:rounded prose-inline-code:font-mono prose-inline-code:p-[2px] prose-inline-code:font-normal prose-inline-code:border prose-inline-code:border-neutral-300 prose-inline-code:bg-neutral-200/50 prose-inline-code:dark:border-neutral-800 prose-inline-code:dark:bg-neutral-800/50",
        "prose-quoteless prose-blockquote:not-italic prose-blockquote:text-neutral-700 dark:prose-blockquote:text-neutral-300 prose-blockquote:text-sm",
        "prose-table:overflow-y-auto",
        props.className,
      )}
    >
      {props.children}
    </article>
  );
};

export default Article;
