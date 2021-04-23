import { Typography } from 'modules/atoms/typography';
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

export const FeaturedArticle: FC<FeaturedArticleProps> = ({ featuredArticle }) => (
  <div className="w-full md:w-4/6  py-4 px-5 rounded-lg  shadow-xl ultra-violet cursor-pointer transition duration-500 ease-in-out transform  hover:scale-110 hover:-translate-y-2">
    <div className="flex  flex-col-reverse md:flex-row items-center  justify-between">
      <div className="w-2/4 rounded">
        <img
          className="w-full rounded"
          src="https://miro.medium.com/max/1400/1*jkg0mv3_tOo8zrTGGTYr4Q.png"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center self-center">
        <Typography variant="h1" color="white">
          {featuredArticle.heading}
        </Typography>
        <Typography variant="h4" color="white">
          {featuredArticle.preview}
        </Typography>
      </div>
    </div>
  </div>
);
