import clsx from 'clsx';
import { FC } from 'react';

type sizeTypes = 'mobile' | 'desktop' | 'tablet';

export interface AvatarProps {
  img: string;
  size: sizeTypes;
  imgAlt: string;
}

const sizeClass = {
  mobile: 'w-16',
  desktop: 'w-24',
};

export const AvatarComponent: FC<AvatarProps> = ({ img, imgAlt, size }) => (
  <div data-testid="main-avatar-cp">
    <img
      src={img}
      alt={imgAlt}
      className={clsx(sizeClass[size], 'rounded-full')}
    />
  </div>
);
