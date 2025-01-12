import type { Doc } from "content-collections";

interface ArticleHeaderProps {
  document: Doc;
}

const ArticleHeader = ({ document }: ArticleHeaderProps) => {
  return (
    <header className="mb-5 flex flex-col space-y-1.5 border-b border-neutral-200 pb-6 pt-2 dark:border-neutral-800">
      <h1>{document.title}</h1>
      <p>{document.description}</p>
    </header>
  );
};

export default ArticleHeader;
