"use client";

import type { ReactNode } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/dialog";

import { buttonVariants } from "@/ui/button";
import { PaletteIcon } from "lucide-react";

import ToastAnimationsCustomizer from "./toastAnimations";
import ToastPositionsCustomizer from "./toastPositions";
import ToastThemeCustomizer from "./toastTheme";
import { useDocsStore } from "@/store";
import CodeblockClient from "@/components/codeblock/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tabs";

interface CustomizerBlockProps {
  docUrl: string;
  children: ReactNode;
}

const CustomizerBlock = (props: CustomizerBlockProps) => {
  return (
    <section className="flex flex-col space-y-2">
      <div className="flex items-center justify-center overflow-y-auto py-1">
        {props.children}
      </div>
    </section>
  );
};

const Customizer = () => {
  const { toastAnimation, toastPosition, toastTheme } = useDocsStore();
  return (
    <Dialog>
      <DialogTrigger
        title="Customizer"
        className={buttonVariants({
          variant: "ghost",
          size: "icon",
        })}
      >
        <PaletteIcon size={20} strokeWidth={1.5} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="border-b border-dashed border-neutral-200 pb-3 dark:border-neutral-800">
          <DialogTitle>Customizer</DialogTitle>
          <DialogDescription>Configure the Toaster component</DialogDescription>
        </DialogHeader>
        <Tabs
          defaultValue="account"
          className="w-full overflow-y-auto border-b border-dashed border-neutral-200 pb-3 dark:border-neutral-800"
        >
          <TabsList className="w-full">
            <TabsTrigger value="positions">Positions</TabsTrigger>
            <TabsTrigger value="animations">Animations</TabsTrigger>
            <TabsTrigger value="theme">Theme</TabsTrigger>
          </TabsList>
          <TabsContent value="positions">
            <CustomizerBlock docUrl="/toaster#position">
              <ToastPositionsCustomizer />
            </CustomizerBlock>
          </TabsContent>
          <TabsContent value="animations">
            <CustomizerBlock docUrl="/options#animationonclose">
              <ToastAnimationsCustomizer />
            </CustomizerBlock>
          </TabsContent>
          <TabsContent value="theme">
            <CustomizerBlock docUrl="/toaster#theme">
              <ToastThemeCustomizer />
            </CustomizerBlock>
          </TabsContent>
        </Tabs>
        <CodeblockClient
          noProseStyles={true}
          code={`import { Toaster } from "@pheralb/toast";

<Toaster${toastTheme ? `\n  theme="${toastTheme}"` : ""}
  position="${toastPosition}"
  toastOptions={{
    animationOnClose: "${toastAnimation}"
  }}
/>`}
          lang="tsx"
        />
      </DialogContent>
    </Dialog>
  );
};

export default Customizer;
