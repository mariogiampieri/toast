"use client";

import { toast, type ToastTheme } from "@pheralb/toast";
import { useDocsStore } from "@/store";
import { Button } from "@/ui/button";
import { cn } from "@/utils/cn";
import {
  CheckIcon,
  MonitorIcon,
  MoonIcon,
  RefreshCcwIcon,
  SunIcon,
} from "lucide-react";

const ToastThemeCustomizer = () => {
  const { toastTheme, setToastTheme } = useDocsStore();
  const iconSize = 14;
  const activeBtn = cn("border-neutral-600 dark:border-neutral-700");

  const handleChangeTheme = (theme: ToastTheme | undefined) => {
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
    <div className="flex items-center space-x-1.5">
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
      <Button variant="outline" onClick={() => handleChangeTheme(undefined)}>
        <RefreshCcwIcon size={iconSize} />
        <span>default</span>
      </Button>
    </div>
  );
};

export default ToastThemeCustomizer;
