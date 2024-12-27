import { type HTMLProps } from "react";

import { FileIcon } from "lucide-react";
import CopyToClipboardBtn from "./copyToClipboard";
import { Languages } from "./languages";

interface PreProps extends HTMLProps<HTMLPreElement> {
  __rawString__?: string;
  ["data-language"]?: string;
}

const CodeblockMDX = (props: PreProps) => {
  const {
    children,
    __rawString__ = "",
    ["data-language"]: dataLanguage = "Shell",
  } = props;
  const selectedLanguage = Languages.find((lang) => lang.name === dataLanguage);

  return (
    <div className="relative">
      <div className="flex items-center justify-between rounded-t-md border-l border-r border-t border-neutral-200 bg-neutral-100 px-1.5 py-1 dark:border-neutral-800 dark:bg-neutral-800/40">
        <div className="flex items-center space-x-2 text-neutral-500 dark:text-neutral-400">
          {selectedLanguage?.icon ? (
            <selectedLanguage.icon className="h-[18px] w-[18px]" />
          ) : (
            <FileIcon size={14} />
          )}
          <span className="font-mono text-sm tracking-tight">
            {dataLanguage}
          </span>
        </div>
        <CopyToClipboardBtn content={__rawString__} />
      </div>
      <pre className="overflow-x-auto rounded-t-none bg-transparent" {...props}>
        {children}
      </pre>
    </div>
  );
};

export default CodeblockMDX;
