import { useState, useEffect } from 'react';
import { toast } from '@pheralb/toast';

import { copyToClipboard } from '@/utils';
import { CheckCheckIcon, CopyIcon } from 'lucide-react';
import { createHighlighter, makeSingletonHighlighter } from 'shiki/bundle/web';

type Languages = 'typescript' | 'tsx';

interface CodeHighlightProps {
  code: string;
  lang?: Languages;
}

export default function Codeblock({
  code,
  lang = 'typescript',
}: CodeHighlightProps) {
  const [highlightedCode, setHighlightedCode] = useState<string>('');
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const getHighlighter = makeSingletonHighlighter(createHighlighter);

  useEffect(() => {
    async function highlightCode() {
      const highlighter = await getHighlighter({
        themes: ['github-light', 'github-dark'],
        langs: ['typescript', 'tsx'],
      });
      try {
        const html = await highlighter.codeToHtml(code, {
          lang,
          themes: {
            light: 'github-light',
            dark: 'github-dark',
          },
        });
        setHighlightedCode(html);
      } catch (error) {
        console.error('Error highlighting code:', error);
        setHighlightedCode(code);
      }
    }

    highlightCode();
  }, [code, lang]);

  const handleCopy = async () => {
    try {
      await copyToClipboard(code);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 700);
    } catch (error) {
      toast.error({
        text: 'Failed to copy to clipboard',
        description: `${error}`,
      });
    }
  };

  return (
    <div className="relative">
      <button
        title="Copy code"
        className="absolute right-0 top-0 m-3 text-white opacity-50 transition-opacity hover:opacity-100"
        onClick={handleCopy}
      >
        {isCopied ? <CheckCheckIcon size={14} /> : <CopyIcon size={14} />}
      </button>
      <div
        className="bg-transparent"
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      />
    </div>
  );
}
