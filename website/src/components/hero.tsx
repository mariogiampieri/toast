"use client";

import { toast } from "@pheralb/toast";
import { SparkleCard } from "./sparkleCard";

import { ArrowUpRight, Sparkles } from "lucide-react";
import { Github } from "@/ui/icons";
import ExternalLink from "@/ui/externalLink";
import { Button, buttonVariants } from "@/ui/button";

const Hero = () => {
  return (
    <SparkleCard
      className="rounded-md border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"
      useBottomDivider={false}
    >
      <div className="animate-in fade-in-30 slide-in-from-bottom-2 mb-4 flex flex-col space-y-1 duration-500">
        <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">Toast</h1>
        <p className="font-medium text-neutral-500 dark:text-neutral-400">
          An accessible and beautiful toast library for React.
        </p>
      </div>
      <div className="animate-in fade-in-40 flex flex-col items-center space-y-2 duration-700 md:flex-row md:space-x-2 md:space-y-0">
        <Button
          variant="default"
          className="group w-full md:w-40"
          onClick={() =>
            toast.default({
              text: "pheralb/toast",
              description: "✨ A beautiful toast library for React",
            })
          }
        >
          <Sparkles
            size={14}
            className="duration-500 group-hover:animate-pulse group-hover:text-yellow-400"
          />
          <span>Render a toast</span>
        </Button>
        <ExternalLink
          title="View on GitHub"
          href="https://github.com/pheralb/toast"
          className={buttonVariants({
            variant: "outline",
            className: "w-full no-underline md:w-44",
          })}
        >
          <div className="flex items-center space-x-2">
            <Github height={14} />
            <span>View on GitHub</span>
          </div>
          <ArrowUpRight size={12} />
        </ExternalLink>
      </div>
    </SparkleCard>
  );
};

export default Hero;
