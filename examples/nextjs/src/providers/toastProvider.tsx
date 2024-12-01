'use client';

import { Toaster, ToastTheme, type ToasterProperties } from '@pheralb/toast';
import {
  CircleAlert,
  CircleCheck,
  CircleX,
  InfoIcon,
  LoaderIcon,
} from 'lucide-react';
import { useTheme } from 'next-themes';

const ToastClientProvider = (props: ToasterProperties) => {
  const { theme } = useTheme();
  return (
    <Toaster
      toastFont="font-sans"
      maxToasts={10}
      theme={theme as ToastTheme}
      toastIcons={{
        info: <InfoIcon className="text-blue-500" />,
        error: <CircleX className="text-red-500" />,
        warning: <CircleAlert className="text-yellow-500" />,
        success: <CircleCheck className="text-green-500" />,
        loading: <LoaderIcon className="animate-spin text-gray-500" />,
      }}
      {...props}
    />
  );
};

export default ToastClientProvider;
