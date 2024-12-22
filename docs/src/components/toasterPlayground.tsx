import { useDocsStore } from '@/store';
import {
  Toaster,
  type ToasterProperties,
  type ToastTheme,
} from '@pheralb/toast';
import { useEffect, useState } from 'react';

const ToasterPlayground = (props: ToasterProperties) => {
  const { applyCustomTheme, toastPosition, toastTheme } = useDocsStore();
  const [theme, setThemeState] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setThemeState(isDarkMode ? 'dark' : 'light');
  }, []);

  return (
    <Toaster
      position={toastPosition}
      theme={toastTheme ?? (theme as ToastTheme)}
      toastOptions={{
        font: applyCustomTheme ? applyCustomTheme.font : 'font-sans',
        ...applyCustomTheme,
      }}
      {...props}
    />
  );
};

export default ToasterPlayground;
