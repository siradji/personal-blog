import { FC } from 'react';
import { HamburgerMenuIcon, CloseIcon } from 'modules/icons';

const btnClasses = 'outline-none bg-none border-none cursor-pointer';

export interface IconProps {
  onClick: (e: any) => void;
}

export const Menu: FC<IconProps> = ({ onClick }: IconProps) => (
  <a onClick={(e: any) => onClick(e)} className={btnClasses}>
    <HamburgerMenuIcon width={7} height={7} fill="white" />
  </a>
);

export const Close: FC<IconProps> = ({ onClick }: IconProps) => (
  <a onClick={(e: any) => onClick(e)} className={btnClasses}>
    <CloseIcon width={7} height={7} fill="white" />
  </a>
);
