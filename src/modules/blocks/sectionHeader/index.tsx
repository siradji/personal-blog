import { LineComponent } from 'modules/atoms/line';
import { Typography } from 'modules/atoms/typography';
import { FC } from 'react';

export interface SectionHeaderInterface {
  lineColor: string;
  headingColor: string;
  heading: string;
}

export const SectionHeader: FC<SectionHeaderInterface> = ({
  headingColor,
  lineColor,
  heading,
}) => (
  <div className="flex flex-col my-3 md:my-10">
    <LineComponent width="full" height={2} background={lineColor} />
    <Typography variant="h1" bold customColor={headingColor}>
      {heading}
    </Typography>
  </div>
);
