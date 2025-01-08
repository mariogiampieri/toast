export interface ToC {
  level?: number;
  text?: string;
  slug?: string;
}

export interface TableOfContentsProps {
  tocData: ToC[];
}
