import { FC } from 'react';

import { FeaturedArticle, AboutCard, Article } from 'modules/blocks/cards';

const article: Article = {
  heading: 'How to be a better react developer',
  pubDate: '20-12-2021',
  preview: 'Hello Guys! today i will be talking about something different today',
  tags: ['React', 'Javascript', 'Front end'],
};

export const MastHead: FC<{}> = () => (
  <div className="flex flex-col-reverse md:flex-row justify-between my-10 space-x-4">
    <FeaturedArticle featuredArticle={article} />
    <AboutCard cardHeading="Suraj Auwal">
      Hi! My name is Suraj a javascript fanboy and content creator. Nice to e-meet
      you!
    </AboutCard>
  </div>
);
