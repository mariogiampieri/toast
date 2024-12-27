import { SidebarRoutes } from "@/docs.config";
import { cn } from "@/utils/cn";

import SidebarItem from "./sidebarItem";

const Sidebar = () => {
  return (
    <nav
      className={cn(
        "fixed z-50 h-[calc(100vh-4rem)] w-48 overflow-y-auto overflow-x-hidden pb-10",
        "bg-neutral-50 dark:bg-neutral-900",
        "flex flex-col",
        "border-r border-neutral-200 dark:border-neutral-800",
      )}
    >
      <div className="flex flex-1 flex-col space-y-8 py-7">
        {SidebarRoutes.map((route) => (
          <section key={route.category}>
            <p className="mb-1 flex w-full items-center justify-between space-x-2 py-1 text-start text-sm text-neutral-600 dark:text-neutral-400">
              {route.category}
            </p>
            <div className="flex max-w-full flex-col">
              {route.routes.map((r) => (
                <SidebarItem key={r.title} title={r.title} href={r.path} />
              ))}
            </div>
          </section>
        ))}
      </div>
      {/* <SidebarFooter /> */}
    </nav>
  );
};

export default Sidebar;
