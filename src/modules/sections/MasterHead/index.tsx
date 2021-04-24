import { FC } from 'react';

import { FeaturedArticle, AboutCard, Article } from 'modules/blocks/cards';
import useScreenResize from 'hooks/useScreenResize';

const article: Article = {
  heading: 'How to be a better react developer',
  pubDate: '20-12-2021',
  preview: 'Hello Guys! today i will be talking about something different today',
  tags: ['React', 'Javascript', 'Front end'],
};

export const MastHead: FC<{}> = () => {
  const [screenDimension] = useScreenResize();
  return (
    <div
      className={
        screenDimension.isMobile
          ? 'hidden'
          : 'flex flex-col-reverse md:flex-row justify-between md:my-10 space-x-4'
      }
    >
      {!screenDimension.isMobile && (
        <>
          <FeaturedArticle featuredArticle={article} />
          <AboutCard cardHeading="Hi, I am Suraj!">
            I am a javascript fanboy and content creator. Nice to e-meet you!
          </AboutCard>
        </>
      )}
    </div>
  );
};
