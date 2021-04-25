import Image from 'next/image';
import React, { FC } from 'react';
import { Typography } from 'modules/atoms/typography';
import { Button } from 'modules/atoms/button';
import { Chip } from 'modules/atoms/chip';

export type Article = {
  heading: string;
  preview: string;
  pubDate: string;
  tags: Array<string>;
  coverImg?: string;
  altText?: string;
};

export interface FeaturedArticleProps {
  featuredArticle: Article;
}

export const FeaturedArticle: FC<FeaturedArticleProps> = ({ featuredArticle }) => (
  <div className="w-full lg:w-4/6  rounded-lg  shadow-xl ultra-violet cursor-pointer transition duration-500 ease-in-out transform  hover:scale-100 hover:-translate-y-1">
    <div className="flex flex-row items-center  justify-between">
      <div className="w-2/4 rounded ">
        <Image
          className="w-full rounded"
          src="https://miro.medium.com/max/1400/1*jkg0mv3_tOo8zrTGGTYr4Q.png"
          alt="Top post by Suraj"
          width={500}
          height={450}
        />
      </div>
      <div className="flex flex-col justify-center self-center space-y-4 py-4 px-5 ">
        <Typography variant="h1" color="white">
          {featuredArticle.heading}
        </Typography>
        <Typography variant="h4" color="white">
          {featuredArticle.preview}
        </Typography>
        <div className="flex flex-wrap flex-row space-x-3">
          <Chip rndColors={1} tags content="react" />
          <Chip rndColors={2} tags content="javascript" />
          <Chip rndColors={3} tags content="beginners" />
          <Chip rndColors={4} tags content="front end" />
        </div>
        <Button variant="fill-primary" onClick={() => {}}>
          Read More
        </Button>
      </div>
    </div>
  </div>
);
