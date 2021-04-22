import { FC } from 'react';

import { FeaturedArticle, AboutCard, Article } from 'components/blocks/cards';

const article: Article = {
  heading: 'How to be a better react developer',
  pubDate: '20-12-2021',
  preview: 'Hello Guys! today i will be talking about something different today',
  tags: ['React', 'Javascript', 'Front end'],
};

export const MastHead = () => (
  <div className="flex flex-row justify-between">
    <FeaturedArticle featuredArticle={article} />
    <AboutCard cardHeading="Suraj Auwal">
      Hi, I am Suraj, a passionate javascript developer and content creator
    </AboutCard>
  </div>
);
