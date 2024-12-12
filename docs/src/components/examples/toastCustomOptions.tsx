import { useDocsStore } from '@/store';
import { Button } from '@/ui/button';
import { toast, type ToastOptions } from '@pheralb/toast';
import { PaletteIcon, RefreshCcw } from 'lucide-react';
import Codeblock from '../codeblock';
import { TailwindCSS } from '../icons';

const ToastCustomOptions = () => {
  const { applyCustomTheme, setApplyCustomTheme } = useDocsStore();

  const toastStyles: ToastOptions = {
    headless: true,
    classNames: {
      toast: '',
      container: '',
      actions: '',
      content: '',
      icon: '',
    },
  };

  const handleAddStyles = () => {
    setApplyCustomTheme(toastStyles);
    toast.success({
      text: 'Custom styles added successfully',
      description: '✨ Built with Tailwind CSS',
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
