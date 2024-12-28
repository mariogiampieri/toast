import type { Metadata } from "next";

import { allDocs } from "content-collections";
import { notFound } from "next/navigation";

import { MDX } from "@/mdx/components";
import Article from "@/components/article";
import TableOfContents from "@/components/layout/toc";

type DocPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: DocPageProps): Promise<Metadata> {
  const { slug } = await params;
  const document = allDocs.find((post) => post.slug === slug);

  if (!document) {
    return notFound();
  }

  return {
    title: document.title,
    description: document.description,
  };
}

export default async function DocPage({ params }: DocPageProps) {
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
