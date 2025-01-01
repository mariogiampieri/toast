import Link from "next/link";
import { FrameworkGuides } from "@/docs.config";

const FrameworkGuidesComponent = () => {
  return (
    <div className="grid grid-cols-2 gap-1.5 md:grid-cols-3 lg:grid-cols-4">
      {FrameworkGuides.map((guide) => {
        return guide.routes.map((route) => {
          return (
            <Link
              key={route.path}
              title={route.title}
              href={route.path}
              className="font-headings flex w-full flex-col items-center space-y-3 rounded-md border border-neutral-200 p-[20px] text-[14px] text-sm no-underline shadow-sm transition-colors duration-100 hover:bg-neutral-100 md:w-40 dark:border-neutral-800 dark:hover:bg-neutral-800/50"
            >
              {route.icon && <route.icon height={35} />}
              <span>{route.title}</span>
            </Link>
          );
        });
      })}
    </div>
  );
};

export default FrameworkGuidesComponent;
