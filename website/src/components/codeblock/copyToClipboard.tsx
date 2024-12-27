"use client";

import { copyToClipboard } from "@/utils/copyToClipboard";
import { toast } from "@pheralb/toast";
import { CopyIcon } from "lucide-react";

interface CopyToClipboardBtnProps {
  content: string;
  className?: string;
}

const CopyToClipboardBtn = (props: CopyToClipboardBtnProps) => {
  const handleCopy = async () => {
    try {
      await copyToClipboard(props.content);
      toast.success({
        text: "Copied to clipboard",
      });
    } catch (error) {
      toast.error({
        text: "Failed to copy to clipboard",
        description: `${error}`,
      });
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="text-neutral-500 hover:text-neutral-600 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300"
    >
      <CopyIcon size={12} />
    </button>
  );
};

export default CopyToClipboardBtn;
