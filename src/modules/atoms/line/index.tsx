import clsx from 'clsx';
import { FC } from 'react';

export interface LineInterface {
  width: number | string;
  height: number;
  background: string;
}

export const LineComponent: FC<LineInterface> = ({
  height = 5,
  width = 'full',
  background = 'primary',
}) => <hr className={clsx(`border-${height} w-${width} rounded-sm`, background)} />;
