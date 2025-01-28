import type { Metadata } from "next";

import { allDocs } from "content-collections";
import { notFound } from "next/navigation";
import { MDX } from "@/mdx/components";

import Article from "@/components/article/content";

import { TableOfContents } from "@/components/layout/tableOfContents/toc";
import ResponsiveTocMenu from "@/components/layout/tableOfContents/responsiveTocMenu";

const indexPage = "index";

export async function generateMetadata(): Promise<Metadata> {
  const document = allDocs.find((post) => post.slug === indexPage);

  if (!document) {
    return notFound();
  }

  return {
    title: `Getting Started - @pheralb/toast`,
    description: document.description,
  };
}

const Page = () => {
  const document = allDocs.find((post) => post.slug === indexPage);

  if (!document) {
    return notFound();
  }

  return (
    <>
      <Article className="pb-8 pt-4 md:pt-8">
        {document.tableOfContents && (
          <ResponsiveTocMenu tocData={document.tableOfContents} />
        )}
        <MDX code={document.mdx} />
      </Article>
      <div>
        {document.tableOfContents && (
          <TableOfContents tocData={document.tableOfContents} />
        )}
      </div>
    </>
  );
};

export default Page;
