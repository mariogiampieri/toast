"use client";

import { createHighlighter, makeSingletonHighlighter } from "shiki/bundle/web";
import { useState, useEffect, type ReactNode } from "react";

import { cn } from "@/utils/cn";
import { FileIcon } from "lucide-react";
import CopyToClipboardBtn from "./copyToClipboard";

type Languages = "typescript" | "tsx";

interface CodeHighlightProps {
  code: string;
  lang?: Languages;
  className?: string;
  iconText?: string;
  icon?: ReactNode;
}

const CodeblockClient = ({
  code,
  lang = "typescript",
  className,
  iconText,
  icon,
}: CodeHighlightProps) => {
  const [highlightedCode, setHighlightedCode] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const getHighlighter = makeSingletonHighlighter(createHighlighter);

  useEffect(() => {
    async function highlightCode() {
      const highlighter = await getHighlighter({
        themes: ["github-light", "github-dark"],
        langs: ["typescript", "tsx"],
      });
      try {
        const html = await highlighter.codeToHtml(code, {
          lang,
          themes: {
            light: "github-light",
            dark: "github-dark",
          },
        });
        setHighlightedCode(html);
      } catch (error) {
        console.error("Error highlighting code:", error);
        setHighlightedCode(code);
      } finally {
        setIsLoading(false);
      }
    }
    highlightCode();
  }, [code, getHighlighter, lang]);

  return (
    <div className={cn("relative", className)}>
      <div className="flex items-center justify-between rounded-t-md border-l border-r border-t border-neutral-200 bg-neutral-100 px-1.5 py-1 dark:border-neutral-800 dark:bg-neutral-800/40">
        <div className="flex items-center space-x-2 text-neutral-500 dark:text-neutral-400">
          {icon || <FileIcon size={14} />}
          <span className="font-mono text-sm tracking-tight">{iconText}</span>
        </div>
        <CopyToClipboardBtn content={code} />
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div
          className="overflow-y-auto bg-transparent"
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      )}
    </div>
  );
};

export default CodeblockClient;
