import { useMDXComponent } from "@content-collections/mdx/react";

// Global Components:
import Hero from "@/components/hero";

// Playground Components:
import ToastCustomOptions from "@/components/playground/toastCustomOptions";
import {
  ToastVariantExamples,
  ToastActionsExamples,
  ToastLoadingExample,
} from "@/components/playground/toast";
import { Positions, ThemeExamples } from "@/components/playground/toaster";
import CodeblockMDX from "@/components/codeblock/mdx";

interface MDXComponentsProps {
  code: string;
  className?: string;
}

export function MDX(props: MDXComponentsProps) {
  const Component = useMDXComponent(props.code);
  return (
    <Component
      components={{
        pre: (props) => <CodeblockMDX {...props} />,
        Hero,
        Positions,
        ThemeExamples,
        ToastCustomOptions,
        ToastVariantExamples,
        ToastActionsExamples,
        ToastLoadingExample,
      }}
    />
  );
}
