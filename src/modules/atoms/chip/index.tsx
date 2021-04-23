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
  tags: boolean;
}

export const Chip: FC<ChipPropsInterface> = ({
  rndColors,
  content,
  tags = false,
}) => {
  return (
    <span
      className={clsx(
        randomChipColors[rndColors],
        'rounded-xl p-1 px-4 text-center text-sm ',
      )}
    >
      {`${tags ? '#' : ''}${content}`}
    </span>
  );
};
