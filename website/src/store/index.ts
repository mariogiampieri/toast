import type {
  ToastAnimations,
  ToastOptions,
  ToastPosition,
  ToastTheme,
  ToastVariant,
} from "@pheralb/toast";
import { create } from "zustand";

interface DocsStore {
  toastPosition: ToastPosition;
  toastVariant: ToastVariant;
  toastTheme: ToastTheme | undefined;
  applyCustomTheme: ToastOptions | undefined;
  toastAnimation: ToastAnimations;
  setApplyCustomTheme: (properties: ToastOptions | undefined) => void;
  setToastPosition: (position: ToastPosition) => void;
  setToastVariant: (variant: ToastVariant) => void;
  setToastTheme: (theme: ToastTheme | undefined) => void;
  setToastAnimation: (animation: ToastAnimations) => void;
}

export const useDocsStore = create<DocsStore>((set) => ({
  toastPosition: "bottom-right",
  toastVariant: "success",
  toastTheme: undefined,
  applyCustomTheme: false,
  toastAnimation: "default",
  setApplyCustomTheme: (apply) => set({ applyCustomTheme: apply }),
  setToastPosition: (position) => set({ toastPosition: position }),
  setToastVariant: (variant) => set({ toastVariant: variant }),
  setToastTheme: (theme) => set({ toastTheme: theme }),
  setToastAnimation: (animation) => set({ toastAnimation: animation }),
}));
