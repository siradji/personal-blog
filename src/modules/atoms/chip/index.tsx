import clsx from 'clsx';
import { FC } from 'react';

const randomChipColors = {
  1: 'bg-ui-purple text-main-white',
  2: 'bg-main-red text-main-white',
  3: 'bg-main-blue text-main-white',
  4: 'bg-main-white text-main-blue',
};

export interface ChipPropsInterface {
  rndColors: number;
  content: string;
  tags?: boolean;
  rounded?: boolean;
}

export const Chip: FC<ChipPropsInterface> = ({
  rndColors,
  content,
  tags,
  rounded,
}) => (
  <span
    className={clsx(
      randomChipColors[rndColors],
      ' py-1 px-1 md:px-4 text-center text-sm max-w-lg',
      rounded && 'rounded-xl',
    )}
  >
    {`${tags ? '#' : ''}${content}`}
  </span>
);
