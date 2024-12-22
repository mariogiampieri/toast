import { toast, type ToastOptions } from '@pheralb/toast';
import { PaletteIcon, RefreshCcw } from 'lucide-react';
import { useDocsStore } from '@/store';
import { cn } from '@/utils';

import { Button } from '@/ui/button';
import Codeblock from '@/components/codeblock';
import { TailwindCSS } from '@/components/icons';

const ToastCustomOptions = () => {
  const { applyCustomTheme, setApplyCustomTheme } = useDocsStore();

  const toastStyles: ToastOptions = {
    headless: true,
    classNames: {
      toast: cn(
        'font-sans text-sm font-medium',
        'bg-zinc-200/90 dark:bg-zinc-800/90',
        'text-zinc-900 dark:text-zinc-100',
        'border border-zinc-300 dark:border-zinc-700',
        'rounded-lg shadow-lg',
        'relative flex items-center space-x-2',
      ),
      container: cn('flex items-center space-x-[6px] w-full', 'p-2'),
      content: cn('flex flex-col space-y-0.5'),
      actions: {
        container: cn(''),
        actionBtn: cn(
          'px-2 py-1 text-sm font-medium rounded-md',
          'bg-zinc-300 dark:bg-zinc-700',
          'text-zinc-900 dark:text-zinc-100',
          'hover:bg-zinc-400 dark:hover:bg-zinc-600',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-500 dark:focus-visible:ring-zinc-400',
          'transition duration-200 ease-in-out',
        ),
        closeBtn: cn('absolute top-0 right-0'),
      },
      icon: cn('flex-shrink-0 h-6 w-6'),
    },
  };

  const handleAddStyles = () => {
    setApplyCustomTheme(toastStyles);
    toast.success({
      text: 'Custom styles added successfully',
      description: '✨ Built with Tailwind CSS',
      delayDuration: 40000,
      action: {
        content: 'Hello',
        onClick: () => {
          console.log('Hello, world!');
        },
      },
    });
  };

  const handleDeleteStyles = () => {
    setApplyCustomTheme(undefined);
    toast.success({
      text: 'Deleted custom styles successfully',
    });
  };

  return (
    <div className="flex flex-col space-y-2 pt-2">
      <div className="flex items-center justify-between">
        <button
          onClick={() =>
            toast.success({
              text: 'Hello, world!',
              description: '👋 Welcome',
              delayDuration: 20000,
            })
          }
        >
          Show Toast
        </button>
        <Button
          variant="outline"
          disabled={applyCustomTheme?.headless}
          onClick={() => handleAddStyles()}
        >
          <PaletteIcon size={14} />
          <span>Modify styles</span>
        </Button>
        <Button
          variant="outline"
          disabled={!applyCustomTheme?.headless}
          onClick={() => handleDeleteStyles()}
        >
          <RefreshCcw size={14} />
          <span>Reset</span>
        </Button>
      </div>
      <Codeblock
        icon={<TailwindCSS width={20} height={20} />}
        iconText="Styled with Tailwind CSS"
        code={`<Toaster
  toastOptions={{
    headless: true,
    classNames: {
      toast: '${toastStyles.classNames?.toast}',
      container: '${toastStyles.classNames?.container}',
      actions: '${toastStyles.classNames?.actions}',
      content: '${toastStyles.classNames?.content}',
      icon: '${toastStyles.classNames?.icon}',
    },
  }}
/>;`}
        lang="tsx"
      />
    </div>
  );
};

export default ToastCustomOptions;
