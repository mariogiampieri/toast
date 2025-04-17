import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
import React from "react";
import sanitizeHtml from "sanitize-html";
import type { ReactElement } from "react";

export function htmlToJsx(htmlString: string): ReactElement {
  const sanitized = sanitizeHtml(htmlString, {
    allowedTags: ["b", "i", "em", "strong", "a", "p", "br", "ul", "li"],
    allowedAttributes: {
      a: ["href", "target", "rel"],
      // allow any to pass class or id
      "*": ["class", "id"],
    },
  });

  return (
    unified()
      .use(rehypeParse, { fragment: true })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .use((rehypeReact as any).default, {
        createElement: React.createElement,
      })
      .processSync(sanitized).result as ReactElement
  );
}
