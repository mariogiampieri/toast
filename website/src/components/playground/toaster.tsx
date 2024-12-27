"use client";

import type {
  ToastPosition as Position,
  ToastTheme as Theme,
} from "@pheralb/toast";

import { useDocsStore } from "@/store";

import { toast } from "@pheralb/toast";
import { Button } from "@/ui/button";
import {
  CheckIcon,
  MonitorIcon,
  MoonIcon,
  RefreshCcwIcon,
  SunIcon,
} from "lucide-react";
import { cn } from "@/utils/cn";
import Codeblock from "@/components/codeblock/client";

const activeBtn = cn("border-neutral-600 dark:border-neutral-700");

const Positions = () => {
  const { toastPosition, setToastPosition } = useDocsStore();
  const iconSize = 14;

  const handleChangePosition = (position: Position) => {
    toast.success({
      text: `Position changed`,
      description: `Position changed to ${position}`,
    });
    setToastPosition(position);
  };
  return (
    <div className="flex flex-col space-y-2">
      <div className="custom-scrollbar flex items-center space-x-2 overflow-y-auto">
        <Button
          variant="outline"
          className={toastPosition === "top-left" ? activeBtn : ""}
          onClick={() => handleChangePosition("top-left")}
        >
          {toastPosition === "top-left" && <CheckIcon size={iconSize} />}
          <span>top-left</span>
        </Button>
        <Button
          variant="outline"
          className={toastPosition === "top-right" ? activeBtn : ""}
          onClick={() => handleChangePosition("top-right")}
        >
          {toastPosition === "top-right" && <CheckIcon size={iconSize} />}
          <span>top-right</span>
        </Button>
        <Button
          variant="outline"
          className={toastPosition === "top-center" ? activeBtn : ""}
          onClick={() => handleChangePosition("top-center")}
        >
          {toastPosition === "top-center" && <CheckIcon size={iconSize} />}
          <span>top-center</span>
        </Button>
        <Button
          variant="outline"
          className={toastPosition === "bottom-right" ? activeBtn : ""}
          onClick={() => handleChangePosition("bottom-right")}
        >
          {toastPosition === "bottom-right" && <CheckIcon size={iconSize} />}
          <span>bottom-right</span>
        </Button>
        <Button
          variant="outline"
          className={toastPosition === "bottom-left" ? activeBtn : ""}
          onClick={() => handleChangePosition("bottom-left")}
        >
          {toastPosition === "bottom-left" && <CheckIcon size={iconSize} />}
          <span>bottom-left</span>
        </Button>
        <Button
          variant="outline"
          className={toastPosition === "bottom-center" ? activeBtn : ""}
          onClick={() => handleChangePosition("bottom-center")}
        >
          {toastPosition === "bottom-center" && <CheckIcon size={iconSize} />}
          <span>bottom-center</span>
        </Button>
      </div>
      <Codeblock code={`<Toaster position="${toastPosition}" />`} lang="tsx" />
    </div>
  );
};

const ThemeExamples = () => {
  const { toastTheme, setToastTheme } = useDocsStore();
  const iconSize = 14;

  const handleChangeTheme = (theme: Theme | undefined) => {
    if (theme === undefined) {
      toast.success({
        text: "Theme reset to default",
      });
    } else {
      toast.success({
        text: `Theme changed to ${theme}`,
      });
    }
    setToastTheme(theme);
  };

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className={toastTheme === "light" ? activeBtn : ""}
            onClick={() => handleChangeTheme("light")}
          >
            {toastTheme === "light" ? (
              <CheckIcon size={iconSize} />
            ) : (
              <SunIcon size={iconSize} />
            )}
            <span>light</span>
          </Button>
          <Button
            variant="outline"
            className={toastTheme === "dark" ? activeBtn : ""}
            onClick={() => handleChangeTheme("dark")}
          >
            {toastTheme === "dark" ? (
              <CheckIcon size={iconSize} />
            ) : (
              <MoonIcon size={iconSize} />
            )}
            <span>dark</span>
          </Button>
          <Button
            variant="outline"
            className={toastTheme === "system" ? activeBtn : ""}
            onClick={() => handleChangeTheme("system")}
          >
            {toastTheme === "system" ? (
              <CheckIcon size={iconSize} />
            ) : (
              <MonitorIcon size={iconSize} />
            )}
            <span>system</span>
          </Button>
        </div>
        <Button variant="ghost" onClick={() => handleChangeTheme(undefined)}>
          <RefreshCcwIcon size={iconSize} />
          <span>reset</span>
        </Button>
      </div>
      <Codeblock code={`<Toaster theme="${toastTheme}" />`} lang="tsx" />
    </div>
  );
};

export { Positions, ThemeExamples };
