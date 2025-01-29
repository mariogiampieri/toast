"use client";

import { toast, type ToastOptions } from "@pheralb/toast";
import {
  MessageSquareShareIcon,
  PaletteIcon,
  RefreshCcw,
  XIcon,
  PartyPopperIcon,
} from "lucide-react";
import JSConfetti from "js-confetti";
import { cn } from "@/utils/cn";
import { useDocsStore } from "@/store";
import Codeblock from "@/components/codeblock/client";

import { Button } from "@/ui/button";

const ToastHeadless = () => {
  const { applyCustomTheme, setApplyCustomTheme } = useDocsStore();

  const toastStyles: ToastOptions = {
    headless: true,
    classNames: {
      toast: cn(
        "font-sans text-sm font-medium z-50",
        "bg-zinc-100/90 dark:bg-zinc-800/90",
        "text-zinc-900 dark:text-zinc-100",
        "border border-zinc-200 dark:border-zinc-700",
        "rounded-lg shadow-md",
        "relative flex items-center",
      ),
      container: cn("flex items-center py-4 space-x-2 px-4 w-full"),
      content: cn("flex flex-col space-y-0.5 mr-2"),
      actions: {
        container: cn("flex flex-col px-3"),
        actionBtn: cn(
          "px-2 py-1 text-[12px] font-medium rounded-md",
          "bg-zinc-200 dark:bg-zinc-700",
          "text-zinc-900 dark:text-zinc-100",
          "hover:bg-zinc-300 dark:hover:bg-zinc-600",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-500 dark:focus-visible:ring-zinc-400",
          "transition duration-200 ease-in-out",
        ),
        closeBtn: cn(
          "absolute items-center flex justify-center -top-2 -left-2 p-0.5 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors bg-zinc-200 dark:bg-zinc-800 p-0.5 border border-zinc-300 dark:border-zinc-500 hover:border-zinc-600 dark:hover:border-zinc-200 rounded-full",
          "focus:outline-none",
        ),
      },
      icon: cn("flex-shrink-0 mr-1"),
    },
    defaultActionContent: (
      <div className="flex items-center space-x-2">
        <PartyPopperIcon size={16} />
        <span>Confetti</span>
      </div>
    ),
    defaultCloseContent: <XIcon size={12} />,
  };

  const handleAddStyles = () => {
    setApplyCustomTheme(toastStyles);
    handleTryToast();
  };

  const handleTryToast = () => {
    toast.success({
      text: "Headless Toast",
      description: "with Tailwind CSS",
      delayDuration: 14000,
      action: {
        onClick: () => {
          if (typeof window !== "undefined") {
            const confetti = new JSConfetti();
            confetti.addConfetti({
              confettiRadius: 3,
              confettiNumber: 100,
              confettiColors: [
                "#14532d",
                "#ff477e",
                "#f7f7f7",
                "#ffcc00",
                "#ffcc00",
              ],
            });
          }
        },
      },
    });
  };

  const handleDeleteStyles = () => {
    setApplyCustomTheme(undefined);
    toast.success({
      text: "Deleted custom styles successfully",
    });
  };

  return (
    <div className="flex flex-col space-y-2 pt-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <Button
            variant="outline"
            disabled={applyCustomTheme?.headless}
            onClick={() => handleAddStyles()}
          >
            <PaletteIcon size={14} />
            <span>Modify styles</span>
          </Button>
          <Button variant="outline" onClick={() => handleTryToast()}>
            <MessageSquareShareIcon size={14} />
            <span>Show Toast</span>
          </Button>
        </div>
        <Button
          variant="outline"
          disabled={!applyCustomTheme?.headless}
          onClick={() => handleDeleteStyles()}
        >
          <RefreshCcw size={14} />
          <span>Reset</span>
        </Button>
      </div>
      <Codeblock
        code={`<Toaster
  toastOptions={{
    headless: true,
    classNames: {
      toast: '${toastStyles.classNames?.toast}',
      container: '${toastStyles.classNames?.container}',
      content: '${toastStyles.classNames?.content}',
      actions: {
        container: '${toastStyles.classNames?.actions?.container}',
        actionBtn: '${toastStyles.classNames?.actions?.actionBtn}',
        closeBtn: '${toastStyles.classNames?.actions?.closeBtn}',
      },
      icon: '${toastStyles.classNames?.icon}',
    },
    defaultActionContent: (
      <div className="flex items-center space-x-2">
        <PartyPopperIcon size={16} />
        <span>Confetti</span>
      </div>
    ),
    defaultCloseContent: <XIcon size={12} />,
  }}
/>;`}
        lang="tsx"
      />
    </div>
  );
};

export default ToastHeadless;
