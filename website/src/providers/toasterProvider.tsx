"use client";

import {
  Toaster,
  type ToasterProperties,
  type ToastTheme,
} from "@pheralb/toast";

import { useDocsStore } from "@/store";
import { useTheme } from "next-themes";

const ToasterProvider = (props: ToasterProperties) => {
  const { applyCustomTheme, toastPosition, toastTheme, toastAnimation } =
    useDocsStore();
  const { theme } = useTheme();
  return (
    <Toaster
      position={toastPosition}
      theme={toastTheme ?? (theme as ToastTheme)}
      toastOptions={{
        font: applyCustomTheme ? applyCustomTheme.font : "font-sans",
        animationOnClose: toastAnimation,
        ...applyCustomTheme,
      }}
      {...props}
    />
  );
};

export default ToasterProvider;
