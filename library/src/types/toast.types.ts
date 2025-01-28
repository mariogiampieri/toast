import type { ReactNode } from "react";

export type Variant = "success" | "error" | "warning" | "info" | "loading";

export type Position =
  | "top-left"
  | "top-right"
  | "top-center"
  | "bottom-left"
  | "bottom-right"
  | "bottom-center";

export type Theme = "light" | "dark" | "system";

export interface Action {
  content?: string | ReactNode;
  onClick: () => void | (() => Promise<void>);
}

export type ToastIcons = Record<Variant, ReactNode>;

export type ToastProps = {
  id?: number;
  text: string;
  description?: string;
  icon?: ReactNode;
  delayDuration?: number;
  theme?: Theme;
  action?: Action;
};

export interface LoadingType<T = unknown> {
  promise: (() => Promise<T>) | Promise<T>;
  success: string;
  error: string;
  autoDismiss: boolean;
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
}

interface ToastActionsCustomClassnames {
  container: string;
  closeBtn: string;
  actionBtn: string;
}

export interface ToastClassnames {
  toast?: string;
  container?: string;
  icon?: string;
  content?: string;
  actions?: ToastActionsCustomClassnames;
}

export type ToastAnimations = "slide" | "swipe";

export type ToastOptions = {
  animationOnClose?: ToastAnimations;
  font?: string;
  icons?: ToastIcons;
  headless?: boolean;
  classNames?: ToastClassnames;
  defaultActionContent?: string | ReactNode;
  defaultCloseContent?: string | ReactNode;
};

export type ToasterProperties = {
  theme?: Theme;
  maxToasts?: number;
  position?: Position;
  toastOptions?: ToastOptions;
};

export interface ToastPropsWithVariant extends ToastProps {
  variant?: Variant;
}

export interface ToastPropsWithLoading extends ToastPropsWithVariant {
  options?: LoadingType;
}
