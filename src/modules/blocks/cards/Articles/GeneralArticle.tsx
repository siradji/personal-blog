import clsx from 'clsx';
import { FC } from 'react';

import { Chip } from 'modules/atoms/chip';
import { Typography } from 'modules/atoms/typography';

const randomBackground = {
  1: 'ultra-violet',
  2: 'lacterium',
  3: 'moon-purple',
  4: 'pacific-dream',
  6: 'bad-grey',
  5: 'pink-villian',
};

export interface GeneralArticleInterface {
  data?: any;
}

export const GeneralArticle: FC<GeneralArticleInterface> = ({ data }) => {
  const rndNum = Math.floor(Math.random() * 6) + 1;
  return (
    <div
      className={clsx(
        'h-52 rounded-sm article-card flex flex-col  w-80 md:w-full cursor-pointer shadow-lg',
        'bg-main-blue',
      )}
    >
      <div className=" py-4 px-3">
        <Typography variant="h1" color="white">
          {data.title}
        </Typography>
        <div className="relative">
          <div className="absolute -right-4 -top-20">
            <Chip rndColors={2} content="react" />
          </div>
        </div>
      </div>
      <div className="mt-auto bg-ui-purple px-2 py-3 h-16">
        <Typography variant="paragraph" centered>
          {data.hightLight}
        </Typography>
      </div>
    </div>
  );
};

export default GeneralArticle;
