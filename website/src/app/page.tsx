import { allDocs } from "content-collections";
import { notFound } from "next/navigation";
import { MDX } from "@/mdx/components";

import Article from "@/components/article";
import TableOfContents from "@/components/layout/toc";

const Page = () => {
  const document = allDocs.find((post) => post.slug === "index");

  if (!document) {
    return notFound();
  }

  return (
    <>
      <Article>
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
