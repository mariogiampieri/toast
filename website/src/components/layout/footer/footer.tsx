import {
  AlertTriangleIcon,
  ArrowUpRight,
  BoxIcon,
  HeartIcon,
} from "lucide-react";
import { getLatestVersion } from "fast-npm-meta";

import ExternalLink from "@/ui/externalLink";
import { cn } from "@/utils/cn";
import EditThisPage from "./editThisPage";

const iconSize = 14;
const strokeIcon = 1.4;
const sidebarFooterClasses = cn(
  "group flex items-center py-1 text-neutral-600 transition-colors duration-100 hover:text-black dark:text-neutral-400 dark:decoration-neutral-700 dark:hover:text-white",
);

const Footer = async () => {
  const metadata = await getLatestVersion("@pheralb/toast");

  return (
    <div className="w-full border-b-2 border-dashed border-neutral-200 py-2 text-sm dark:border-neutral-800">
      <div className="font-medium">
        <ExternalLink
          title={`Last version: v${metadata.version}`}
          href={`https://github.com/pheralb/toast/releases/tag/v${metadata.version}`}
          className={cn(sidebarFooterClasses)}
        >
          <BoxIcon
            className="mr-1 group-hover:stroke-pink-600 dark:group-hover:stroke-pink-500"
            height={iconSize}
          />
          <span>v{metadata.version}</span>
          <ArrowUpRight height={12} strokeWidth={strokeIcon} />
        </ExternalLink>
      </div>
      <a
        title="Report a bug"
        href="https://github.com/pheralb/toast/issues/new"
        target="_blank"
        rel="noreferrer"
        className={sidebarFooterClasses}
      >
        <AlertTriangleIcon
          className="mr-1 group-hover:stroke-yellow-600 dark:group-hover:stroke-yellow-500"
          height={iconSize}
        />
        <span>Found a bug?</span>
        <ArrowUpRight height={12} strokeWidth={strokeIcon} />
      </a>
      <EditThisPage
        className={sidebarFooterClasses}
        iconSize={iconSize}
        strokeIcon={strokeIcon}
      />
      <a
        title="Built by pheralb"
        href="https://pheralb.dev"
        target="_blank"
        rel="noreferrer"
        className={sidebarFooterClasses}
      >
        <HeartIcon
          className="mr-1 group-hover:animate-pulse group-hover:stroke-red-600"
          height={iconSize}
        />
        <span>Built by pheralb</span>
        <ArrowUpRight height={12} strokeWidth={strokeIcon} />
      </a>
    </div>
  );
};

export default Footer;
