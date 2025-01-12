"use client";

import ExternalLink from "@/ui/externalLink";
import { cn } from "@/utils/cn";
import { ArrowUpRight, PencilIcon } from "lucide-react";
import { usePathname } from "next/navigation";

interface EditThisPageProps {
  iconSize?: number;
  strokeIcon?: number;
  className?: string;
}

const EditThisPage = (props: EditThisPageProps) => {
  const pathname = usePathname();

  const getUrl = () => {
    const sourcePage =
      "https://github.com/pheralb/toast/blob/main/website/src/docs/";
    if (pathname === "/") {
      return `${sourcePage}index.mdx`;
    }
    const formattedPath = pathname.replace(/^\//, "");
    return `${sourcePage}${formattedPath}.mdx`;
  };

  return (
    <ExternalLink
      title="Found a bug?"
      href={getUrl()}
      className={cn(props.className)}
    >
      <PencilIcon
        className="mr-1 group-hover:stroke-indigo-600 dark:group-hover:stroke-indigo-500"
        height={props.iconSize}
      />
      <span>Edit this page</span>
      <ArrowUpRight height={12} strokeWidth={props.strokeIcon} />
    </ExternalLink>
  );
};

export default EditThisPage;
