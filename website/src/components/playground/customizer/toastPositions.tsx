"use client";

import type { ToastPosition } from "@pheralb/toast";
import { useDocsStore } from "@/store";
import { Button } from "@/ui/button";
import { toast } from "@pheralb/toast";
import { cn } from "@/utils/cn";
import { CheckIcon } from "lucide-react";

const ToastPositionsCustomizer = () => {
  const { toastPosition, setToastPosition } = useDocsStore();
  const iconSize = 14;
  const activeBtn = cn("border-neutral-600 dark:border-neutral-700");

  const handleChangePosition = (position: ToastPosition) => {
    toast.success({
      text: `Position changed`,
      description: `Position changed to ${position}`,
    });
    setToastPosition(position);
  };

  return (
    <div className="custom-scrollbar flex items-center space-x-1.5 overflow-y-auto">
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
  );
};

export default ToastPositionsCustomizer;
