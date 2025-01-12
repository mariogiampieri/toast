import { useMDXComponent } from "@content-collections/mdx/react";

// Global Components:
import Hero from "@/components/hero";
import InstallLibrary from "@/components/installLibrary";
import FrameworkGuidesComponent from "@/components/frameworkGuides";

// Playground Components:
import ToastCustomOptions from "@/components/playground/toastCustomOptions";
import {
  ToastVariantExamples,
  ToastActionsExamples,
  ToastLoadingExample,
} from "@/components/playground/toast";
import { Positions, ThemeExamples } from "@/components/playground/toaster";
import ToastAnimation from "@/components/playground/toastAnimation";

// Local Components:
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
        InstallLibrary,
        FrameworkGuidesComponent,
        Hero,
        Positions,
        ThemeExamples,
        ToastCustomOptions,
        ToastVariantExamples,
        ToastActionsExamples,
        ToastLoadingExample,
        ToastAnimation,
      }}
    />
  );
}
