import type { CodeBlockProps } from './examples.types';
import type { ToastVariant as Variant } from '@pheralb/toast';

import { toast } from '@pheralb/toast';
import { useRef, useState } from 'react';
import JSConfetti from 'js-confetti';
import {
  CheckCheckIcon,
  CircleAlertIcon,
  CircleCheckIcon,
  CopyIcon,
  PartyPopperIcon,
} from 'lucide-react';

import { Button } from '@/ui/button';
import { CopyCodeBtnStyles } from '@/ui/copyCodeBtn';
import { copyToClipboard } from '@/utils';

const ToastCodeBlock = (props: CodeBlockProps) => {
  const preRef = useRef<HTMLPreElement>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copyPreContent = async () => {
    const content = preRef.current?.textContent ?? '';
    await copyToClipboard(content);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 700);
  };

  return (
    <div className="relative">
      <pre ref={preRef}>
        <code>{props.value}</code>
      </pre>
      <button className={CopyCodeBtnStyles} onClick={copyPreContent}>
        <span className="sr-only">Copy</span>
        {isCopied ? <CheckCheckIcon size={16} /> : <CopyIcon size={16} />}
      </button>
    </div>
  );
};

const ToastVariantExamples = () => {
  const [toastVariant, setToastVariant] = useState<string>('success');
  const variants: Variant[] = ['success', 'error', 'warning', 'info'];

  const handleChangeVariant = (variant: Variant) => {
    setToastVariant(variant);
    if (variant !== 'loading') {
      toast[variant]({
        text: `A ${variant} toast 🚀`,
        description: '✨ @pheralb/toast',
      });
    }
  };

  const handleDefault = () => {
    setToastVariant('default');
    toast.default({
      text: 'A default toast 🚀',
      description: '✨ @pheralb/toast',
    });
  };

  return (
    <div className="my-2 flex flex-col space-y-2">
      <div className="flex items-center space-x-2 overflow-y-auto">
        <Button variant="outline" onClick={() => handleDefault()}>
          default
        </Button>
        {variants.map((variant) => (
          <Button
            key={variant}
            variant="outline"
            onClick={() => handleChangeVariant(variant)}
          >
            {variant}
          </Button>
        ))}
      </div>
      <ToastCodeBlock label={toastVariant} value={toastVariant} />
    </div>
  );
};

const ToastActionsExamples = () => {
  const handleChangeVariant = () => {
    toast.default({
      text: `A toast with confetti 🎉`,
      description: 'Click the button to see the confetti',
      icon: <PartyPopperIcon size={14} />,
      action: {
        onClick: () => {
          if (typeof window !== 'undefined') {
            const confetti = new JSConfetti();
            confetti.addConfetti({
              confettiRadius: 3,
              confettiNumber: 100,
              confettiColors: [
                '#14532d',
                '#ff477e',
                '#f7f7f7',
                '#ffcc00',
                '#ffcc00',
              ],
            });
          }
        },
      },
    });
  };

  return (
    <Button
      className="my-2"
      variant="outline"
      onClick={() => handleChangeVariant()}
    >
      <PartyPopperIcon size={16} />
      <span>Show a Toast with Confetti</span>
    </Button>
  );
};

const ToastLoadingExample = () => {
  const runFunction = async () => {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
  };

  const runErrorFunction = async () => {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('Test error'));
      }, 2000);
    });
  };

  const handleToastLoading = (success: boolean) => {
    if (success) {
      toast.loading({
        text: 'Loading',
        options: {
          promise: runFunction,
          success: 'Ready',
          error: 'Error',
          autoDismiss: true,
          onSuccess: () => {
            console.log('Success');
          },
          onError: () => {
            console.log('Error');
          },
        },
      });
    } else {
      toast.loading({
        text: 'Loading',
        options: {
          promise: runErrorFunction,
          success: 'Ready',
          error: 'Error',
          autoDismiss: true,
          onSuccess: () => {
            console.log('Success');
          },
          onError: () => {
            console.log('Error');
          },
        },
      });
    }
  };

  return (
    <div className="my-2 flex items-center space-x-2">
      <Button variant="outline" onClick={() => handleToastLoading(true)}>
        <CircleCheckIcon size={16} />
        <span>Show a Loading Toast (Success)</span>
      </Button>
      <Button variant="outline" onClick={() => handleToastLoading(false)}>
        <CircleAlertIcon size={16} />
        <span>Show a Loading Toast (Error)</span>
      </Button>
    </div>
  );
};

export { ToastVariantExamples, ToastActionsExamples, ToastLoadingExample };
