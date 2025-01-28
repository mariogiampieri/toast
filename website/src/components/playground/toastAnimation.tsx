"use client";

import { toast, type ToastAnimations } from "@pheralb/toast";

import { Button } from "@/ui/button";
import CodeblockClient from "@/components/codeblock/client";
import { ArrowDownUpIcon, ArrowRightLeftIcon, CheckIcon } from "lucide-react";
import { useDocsStore } from "@/store";

const ToastAnimation = () => {
  const { toastAnimation, setToastAnimation } = useDocsStore();

  const handleChangeAnimation = (animation: ToastAnimations) => {
    setToastAnimation(animation);
    toast.info({
      text: `Close me 👀`,
      description: `✨ ${animation} animation`,
    });
  };

  return (
    <div className="my-2 flex flex-col space-y-2">
      <div className="flex items-center space-x-2 overflow-y-auto">
        <Button
          variant="outline"
          onClick={() => handleChangeAnimation("slide")}
        >
          {toastAnimation === "slide" ? (
            <CheckIcon size={14} />
          ) : (
            <ArrowDownUpIcon size={14} />
          )}
          <span>Slide</span>
        </Button>
        <Button
          variant="outline"
          onClick={() => handleChangeAnimation("swipe")}
        >
          {toastAnimation === "swipe" ? (
            <CheckIcon size={14} />
          ) : (
            <ArrowRightLeftIcon size={14} />
          )}
          <span>Swipe</span>
        </Button>
      </div>
      <CodeblockClient
        code={`<Toaster
  toastOptions={{
    animationOnClose: "${toastAnimation}",
  }}
/>`}
        lang="tsx"
      />
    </div>
  );
};

export default ToastAnimation;
