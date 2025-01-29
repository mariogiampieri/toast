"use client";

import { useDocsStore } from "@/store";
import { useTheme } from "next-themes";
import Codeblock from "@/components/codeblock/client";

import ToastPositionsCustomizer from "./customizer/toastPositions";
import ToastThemeCustomizer from "./customizer/toastTheme";

const Positions = () => {
  const { toastPosition } = useDocsStore();
  return (
    <div className="flex flex-col space-y-2">
      <ToastPositionsCustomizer />
      <Codeblock code={`<Toaster position="${toastPosition}" />`} lang="tsx" />
    </div>
  );
};

const ThemeExamples = () => {
  const { toastTheme } = useDocsStore();
  const { theme: currentTheme } = useTheme();
  return (
    <div className="flex flex-col space-y-2">
      <ToastThemeCustomizer />
      <Codeblock
        code={`<Toaster theme="${toastTheme ?? currentTheme}" />`}
        lang="tsx"
      />
    </div>
  );
};

export { Positions, ThemeExamples };
