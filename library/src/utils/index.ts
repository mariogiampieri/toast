// Classnames utility function (like classnames npm package):
export const cn = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
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
