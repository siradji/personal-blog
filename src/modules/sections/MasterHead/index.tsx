import { FC } from 'react';

import { FeaturedArticle, AboutCard, Article } from 'modules/blocks/cards';
import useScreenResize from 'hooks/useScreenResize';
import { Link } from 'modules/atoms/Link';

const article: Article = {
  heading: 'How to be a better react developer',
  pubDate: '20-12-2021',
  preview: 'Hello Guys! today i will be talking about something different today',
  tags: ['React', 'Javascript', 'Front end'],
};

export const MastHead: FC<{}> = () => {
  const [screenDimension] = useScreenResize();
  return (
    <div className="hidden sm:flex sm:flex-col-reverse lg:flex-row justify-between md:my-10 space-x-4">
      <>
        <FeaturedArticle featuredArticle={article} />
        <AboutCard cardHeading="Hi, I am Suraj!">
          A JavaScript fanboy and content creator and open source advocate. The
          JavaScript community have done everything for me and i am eternally
          greatful. In my efforts to giving back to the community, i write aritcles
          and tutorials, sometimes,
          <Link variant="purple" to="/" ext>
            answer questions on stackoverflow
          </Link>
        </AboutCard>
      </>
    </div>
  );
};
