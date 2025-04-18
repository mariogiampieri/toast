"use client";

import { toast, type ToastAnimations } from "@pheralb/toast";
import { Button } from "@/ui/button";
import { useDocsStore } from "@/store";
import { ArrowDownUpIcon, ArrowRightLeftIcon, CheckIcon } from "lucide-react";

const ToastAnimationsCustomizer = () => {
  const { toastAnimation, setToastAnimation } = useDocsStore();

  const handleChangeAnimation = (animation: ToastAnimations) => {
    setToastAnimation(animation);
    toast.info({
      text: `Close me 👀`,
      description: `✨ ${animation} animation`,
    });
  };

  return (
    <div className="flex items-center space-x-2 overflow-y-auto">
      <Button variant="outline" onClick={() => handleChangeAnimation("slide")}>
        {toastAnimation === "slide" ? (
          <CheckIcon size={14} />
        ) : (
          <ArrowDownUpIcon size={14} />
        )}
        <span>Slide</span>
      </Button>
      <Button variant="outline" onClick={() => handleChangeAnimation("swipe")}>
        {toastAnimation === "swipe" ? (
          <CheckIcon size={14} />
        ) : (
          <ArrowRightLeftIcon size={14} />
        )}
        <span>Swipe</span>
      </Button>
    </div>
  );
};

export default ToastAnimationsCustomizer;
