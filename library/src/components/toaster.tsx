import { useEffect, useState } from 'react';

import type {
  ToastIcons,
  ToastPropsWithVariant,
  ToasterProperties,
} from '../types/toast.types';

import ToastComponent from './toast';
import { classNames, generateRandomId } from '../utils';

// Ensure openToastGlobal is initialized correctly
let openToastGlobal: (data: ToastPropsWithVariant) => void;

export const Toaster = ({
  maxToasts = 4,
  position = 'bottom-right',
  theme = 'system',
  toastFont,
  toastIcons,
}: ToasterProperties) => {
  const [toasts, setToasts] = useState<ToastPropsWithVariant[]>([]);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Define the openToast function
  const openToast = (data: ToastPropsWithVariant) => {
    const newToast = {
      ...data,
      id: generateRandomId(),
    };
    setToasts((prevToasts) => {
      const isTopPosition =
        position === 'top-left' ||
        position === 'top-right' ||
        position === 'top-center';

      if (prevToasts.length >= maxToasts) {
        return isTopPosition
          ? [newToast, ...prevToasts.slice(0, -1)]
          : [...prevToasts.slice(1), newToast];
      }

      return isTopPosition
        ? [newToast, ...prevToasts]
        : [...prevToasts, newToast];
    });
  };

  // Define the closeToast function
  const closeToast = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  // Assign openToast to the global variable
  openToastGlobal = openToast;

  // Render the component
  return (
    isMounted &&
    toasts.length > 0 && (
      <section
        aria-label="Toast Notifications"
        role="region"
        aria-live="polite"
        className={classNames(
          't_toasts',
          position === 'top-left' ? 't_top-left' : '',
          position === 'top-right' ? 't_top-right' : '',
          position === 'top-center' ? 't_top-center' : '',
          position === 'bottom-left' ? 't_bottom-left' : '',
          position === 'bottom-right' ? 't_bottom-right' : '',
          position === 'bottom-center' ? 't_bottom-center' : '',
          toastFont ? toastFont : 't_default_font',
        )}
      >
        {toasts.map((toast) => (
          <ToastComponent
            key={toast.id}
            theme={theme}
            toastPosition={position}
            toastCustomIcons={toastIcons as ToastIcons}
            onClose={() => closeToast(toast.id!)}
            {...toast}
          />
        ))}
      </section>
    )
  );
};

// Export the openToast function:
export const openToast = (data: ToastPropsWithVariant): void => {
  if (openToastGlobal) {
    openToastGlobal(data);
  } else {
    console.error(
      '🔔 <Toaster /> component is not mounted. Check toast.pheralb.dev/toaster for more information.',
    );
  }
};
