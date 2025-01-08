import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/ui/sheet";
import { buttonVariants } from "@/ui/button";
import { SidebarMenu } from "./sidebar";
import { MenuIcon } from "lucide-react";

const ResponsiveSidebarMenu = () => {
  return (
    <Sheet>
      <SheetTrigger
        className={buttonVariants({
          variant: "ghost",
          className: "mr-2 block w-6 md:hidden",
        })}
      >
        <MenuIcon size={20} />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>pheralb/toast</SheetTitle>
        </SheetHeader>
        <SidebarMenu />
      </SheetContent>
    </Sheet>
  );
};

export default ResponsiveSidebarMenu;
