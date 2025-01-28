import type { Metadata } from "next";

import { allDocs } from "content-collections";
import { notFound } from "next/navigation";

import { MDX } from "@/mdx/components";
import Article from "@/components/article/content";
import ArticleHeader from "@/components/article/header";

import { TableOfContents } from "@/components/layout/tableOfContents/toc";
import ResponsiveTocMenu from "@/components/layout/tableOfContents/responsiveTocMenu";
import { docsSettings } from "@/docs.config";

type DocPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: DocPageProps): Promise<Metadata> {
  const { slug } = await params;
  const document = allDocs.find((post) => post.slug === slug);
  const activateDynamicOg = process.env.ACTIVATE_DYNAMIC_OG_IMAGES === "true";

  if (!document) {
    return notFound();
  }

  return {
    title: document.title,
    description: document.description,
    openGraph: {
      type: "website",
      url: new URL(`/${slug}`, docsSettings.websiteUrl),
      title: `${document.title} - @pheralb/toast`,
      description: document.description,
      siteName: docsSettings.websiteUrl,
      images: [
        {
          url: activateDynamicOg
            ? new URL(`/api/og?document=${slug}`, docsSettings.websiteUrl)
            : new URL(docsSettings.defaultOgImageUrl, docsSettings.websiteUrl),
        },
      ],
    },
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
        <ArticleHeader document={document} />
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
}
