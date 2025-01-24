type ClassValue =
  | string
  | boolean
  | null
  | undefined
  | ClassValue[]
  | { [key: string]: boolean };

// Classnames utility function (like classnames npm package):
export const classNames = (...classes: ClassValue[]): string => {
  const result: string[] = [];
  const processClassValue = (value: ClassValue) => {
    if (typeof value === "string" && value) {
      result.push(value);
    } else if (Array.isArray(value)) {
      value.forEach(processClassValue);
    } else if (typeof value === "object" && value !== null) {
      for (const key in value) {
        if (Object.prototype.hasOwnProperty.call(value, key) && value[key]) {
          result.push(key);
        }
      }
    }
  };
  classes.forEach(processClassValue);
  return result.join(" ");
};

// Generating random id:
export const generateRandomId = () => Math.floor(Math.random() * 1000000);

// Disable transitions when prefers reduced motion is enabled:
export const prefersReducedMotion = (() => {
  let shouldReduceMotion: boolean | undefined = undefined;
  return () => {
    if (shouldReduceMotion === undefined) {
      if (typeof window !== "undefined" && window.matchMedia !== undefined) {
        const mediaQuery = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        );
        shouldReduceMotion = mediaQuery.matches;
      } else {
        shouldReduceMotion = false;
      }
    }
    return shouldReduceMotion;
  };
})();

// Get system theme:
export const getSystemTheme = () => {
  if (typeof window !== "undefined") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "t_dark-theme"
      : "t_light-theme";
  }
  return "t_light-theme";
};
