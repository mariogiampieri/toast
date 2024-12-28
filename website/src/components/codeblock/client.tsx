"use client";

import { createHighlighter, makeSingletonHighlighter } from "shiki/bundle/web";
import { useState, useEffect, type ReactNode } from "react";

import { cn } from "@/utils/cn";
import { FileIcon } from "lucide-react";
import CopyToClipboardBtn from "./copyToClipboard";
import { Languages } from "./languages";

// To avoid getting all languages for shiki, use this type to get only the languages we need:
type Languages = "bash" | "tsx";

interface CodeHighlightProps {
  code: string;
  lang: Languages;
  className?: string;
  children?: ReactNode;
}

const CodeblockClient = ({ lang = "tsx", ...props }: CodeHighlightProps) => {
  const [highlightedCode, setHighlightedCode] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const getHighlighter = makeSingletonHighlighter(createHighlighter);
  const selectedLanguage = Languages.find((langData) => langData.name === lang);

  useEffect(() => {
    async function highlightCode() {
      const highlighter = await getHighlighter({
        themes: ["github-light", "github-dark"],
        langs: ["bash", "tsx"],
      });
      try {
        const html = await highlighter.codeToHtml(props.code, {
          lang,
          themes: {
            light: "github-light",
            dark: "github-dark",
          },
        });
        setHighlightedCode(html);
      } catch (error) {
        console.error(
          "⚠️ codeblock/client.tsx - Error highlighting code:",
          error,
        );
        setHighlightedCode(props.code);
      } finally {
        setIsLoading(false);
      }
    }
    highlightCode();
  }, [props.code, getHighlighter, lang]);

  return (
    <div className={cn("relative", props.className)}>
      <div className="flex items-center justify-between rounded-t-md border-l border-r border-t border-neutral-200 bg-neutral-100 px-1.5 py-1 dark:border-neutral-800 dark:bg-neutral-800/40">
        <div className="flex items-center space-x-2 text-neutral-500 dark:text-neutral-400">
          {selectedLanguage?.icon ? (
            <selectedLanguage.icon className="h-[18px] w-[18px]" />
          ) : (
            <FileIcon size={14} />
          )}
          <span className="font-mono text-sm tracking-tight">
            {selectedLanguage?.name || lang}
          </span>
        </div>
        <div className="flex items-center space-x-3 text-neutral-500 dark:text-neutral-400">
          {props.children}
          <CopyToClipboardBtn content={props.code} />
        </div>
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
