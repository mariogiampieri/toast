import type {
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
  setApplyCustomTheme: (properties: ToastOptions | undefined) => void;
  setToastPosition: (position: ToastPosition) => void;
  setToastVariant: (variant: ToastVariant) => void;
  setToastTheme: (theme: ToastTheme | undefined) => void;
}

export const useDocsStore = create<DocsStore>((set) => ({
  toastPosition: "bottom-right",
  toastVariant: "success",
  toastTheme: undefined,
  applyCustomTheme: false,
  setApplyCustomTheme: (apply) => set({ applyCustomTheme: apply }),
  setToastPosition: (position) => set({ toastPosition: position }),
  setToastVariant: (variant) => set({ toastVariant: variant }),
  setToastTheme: (theme) => set({ toastTheme: theme }),
}));
