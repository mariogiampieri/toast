/* eslint-disable @next/next/no-img-element */
import fs from "fs/promises";
import path from "path";

import { ImageResponse } from "next/og";
import { allDocs } from "content-collections";
import DocumentOGTemplate from "@/components/ogImage";

const searchDocument = (document: string) => {
  return allDocs.find((doc) => doc.slug === document);
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const document = searchParams.get("document");

  if (!document) {
    return new Response("Document not found", { status: 404 });
  }

  const docData = searchDocument(document);

  if (!docData) {
    return new Response("Document not found", { status: 404 });
  }

  return new ImageResponse(
    DocumentOGTemplate({
      document: docData,
    }),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Geist",
          style: "normal",
          data: await fs.readFile(
            path.join(process.cwd(), "src/app/api/og/Geist-Medium.ttf"),
          ),
        },
        {
          name: "Onest",
          style: "normal",
          data: await fs.readFile(
            path.join(process.cwd(), "src/app/api/og/Onest-SemiBold.ttf"),
          ),
        },
      ],
    },
  );
}
