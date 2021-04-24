import React, { FC } from 'react';

// components
import { Chip } from 'modules/atoms/chip';
import { Link } from 'modules/atoms/Link';
import { Typography } from 'modules/atoms/typography';

export interface SectionRelatedProps {
  data: any;
}

export const SectionRelated: FC<SectionRelatedProps> = ({
  data: { title, highLight, tags, link },
}) => {
  function turnacate(s: string, by: number): string {
    if (s.length < by) {
      return s;
    }
    return s.slice(0, by);
  }
  return (
    <div className="flex flex-col px-2 py-4 space-y-6 shadow-md rounded">
      <Typography variant="h2" bold color="dark">
        {title}
      </Typography>
      <div className="flex flex-row space-x-3">
        {tags.map((t: string, i: number) => (
          <Chip key={i} rndColors={i + 1} tags content={t} rounded />
        ))}
      </div>
      <Typography variant="paragraph" color="secondary">
        {turnacate(highLight, 250)}
        <span className="mx-3">
          <Link variant="purple" to={link} underlined size="lg">
            Read more
          </Link>
        </span>
      </Typography>
    </div>
  );
};
