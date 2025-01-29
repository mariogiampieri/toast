import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/ui/sheet";
import { buttonVariants } from "@/ui/button";
import { MenuIcon } from "lucide-react";
import TocMenu from "./tocMenu";
import { TableOfContentsProps } from "./types";

const ResponsiveTocMenu = (props: TableOfContentsProps) => {
  return (
    <Sheet>
      <SheetTrigger
        className={buttonVariants({
          variant: "outline",
          className: "mb-4 mr-2 block w-full md:hidden",
        })}
      >
        <MenuIcon size={20} />
        <span>On this page</span>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>On this page</SheetTitle>
        </SheetHeader>
        <div className="py-3">
          <TocMenu tocData={props.tocData} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ResponsiveTocMenu;
