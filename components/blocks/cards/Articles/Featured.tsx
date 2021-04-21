import { FC } from 'react';

export type Article = {
  heading: string;
  preview: string;
  pubDate: string;
  tags: Array<string>;
};

export interface FeaturedArticleProps {
  featuredArticle: Article;
}

export const FeaturedArticle: FC<FeaturedArticleProps> = ({ featuredArticle }) => {
  return (
    <div className=" min-w-4xl max-w-7xl  rounded hover:shadow-2xl bg-soft-blue">
      <div className="flex flex-col">
        <h1>{featuredArticle.heading}</h1>
        <p>{featuredArticle.preview}</p>
        <p>
          <span>{featuredArticle.pubDate}</span>
        </p>
      </div>
    </div>
  );
};
