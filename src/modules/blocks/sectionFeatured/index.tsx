import { FC } from 'react';
import Image from 'next/image';

// components
import { Button } from 'modules/atoms/button';
import { Typography } from 'modules/atoms/typography';
import { Chip } from 'modules/atoms/chip';

export interface SectionFeaturedProps {
  data: any;
}
export const SectionFeatured: FC<SectionFeaturedProps> = ({
  data: { title, tags, featuredImg, highLight },
}) => {
  return (
    <div className="bg-transparent">
      <div className="flex flex-col space-y-3">
        <Image className="rounded-lg" src={featuredImg} width={500} height={400} />
        <Typography variant="h2" bold color="dark">
          {title}
        </Typography>
        <div className="flex flex-row space-x-3">
          {tags.map((t: string) => (
            <Chip rndColors={3} tags content={t} />
          ))}
        </div>
        <Typography color="dark" variant="paragraph">
          {highLight}
        </Typography>
        <Button variant="outlined-primary" onClick={() => {}}>
          Read More
        </Button>
      </div>
    </div>
  );
};
