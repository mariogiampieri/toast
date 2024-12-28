import { allDocs } from "content-collections";
import { notFound } from "next/navigation";

import { MDX } from "@/mdx/components";
import Article from "@/components/article";
import TableOfContents from "@/components/layout/toc";

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const document = allDocs.find((post) => post.slug === slug);

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
}
