import { FC } from 'react';

import data from 'mock/data/articles.json';

// components
import { Link } from 'modules/atoms/Link';
import { SectionFeatured } from '@modules/blocks/sectionFeatured';
import { SectionHeader } from 'modules/blocks/sectionHeader';
import { SectionRelated } from '@modules/blocks/sectionRelated';
import clsx from 'clsx';

export interface HomepageArticlesProps {
  sectionHeading: string;
  sectionColor?: string;
  direction?: 'left' | 'right';
}

export const HomepageArticles: FC<HomepageArticlesProps> = ({
  sectionHeading,
  sectionColor = 'text-ui-purple',
}) => (
  <section className="my-5">
    <SectionHeader
      heading={sectionHeading}
      lineColor={sectionColor}
      headingColor={sectionColor}
    />
    <div className="flex flex-col md:flex-row justify-between flex-1 md:space-x-8">
      <SectionFeatured data={data[0]} />
      <div className="md:space-y-3">
        <div className="flex flex-col space-y-5">
          {data.slice(0, 3).map((d, i: number) => (
            <SectionRelated data={d} key={i} />
          ))}
        </div>
        <Link variant="purple" size="lg" to="/">
          View All articles
        </Link>
      </div>
    </div>
  </section>
);
