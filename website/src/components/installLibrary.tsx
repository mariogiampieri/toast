"use client";

import { useState } from "react";
import CodeblockClient from "./codeblock/client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu";
import { Bun, NPM, PNPM, Yarn } from "@react-symbols/icons";
import { ChevronDownIcon } from "lucide-react";

const installOptions = [
  {
    name: "npm",
    command: "npm install @pheralb/toast",
    icon: NPM,
  },
  {
    name: "yarn",
    command: "yarn add @pheralb/toast",
    icon: Yarn,
  },
  {
    name: "pnpm",
    command: "pnpm add @pheralb/toast",
    icon: PNPM,
  },
  {
    name: "bun",
    command: "bun add @pheralb/toast",
    icon: Bun,
  },
];

const InstallLibrary = () => {
  const [selectedOption, setSelectedOption] = useState(installOptions[0]);
  return (
    <CodeblockClient code={selectedOption.command} lang="bash">
      <DropdownMenu>
        <DropdownMenuTrigger
          title="Select package manager"
          className="flex items-center space-x-0.5 border-r border-neutral-300 px-2 focus:outline-none dark:border-neutral-700"
        >
          {selectedOption.icon && (
            <selectedOption.icon className="h-[18px] w-[18px]" />
          )}
          <ChevronDownIcon size={14} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {installOptions.map((option) => (
            <DropdownMenuItem
              key={option.name}
              onClick={() => setSelectedOption(option)}
            >
              {option.icon && <option.icon className="h-[18px] w-[18px]" />}
              <span>{option.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </CodeblockClient>
  );
};

export default InstallLibrary;
