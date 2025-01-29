"use client";

import CodeblockClient from "@/components/codeblock/client";
import { useDocsStore } from "@/store";
import ToastAnimationsCustomizer from "./customizer/toastAnimations";

const ToastAnimation = () => {
  const { toastAnimation } = useDocsStore();

  return (
    <div className="my-2 flex flex-col space-y-2">
      <ToastAnimationsCustomizer />
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
