import { FC } from 'react';
import { HamburgerMenuIcon } from 'components/icons';

export interface MenuProps {
  onClick: (e: any) => void;
}

export const Menu: FC<MenuProps> = ({ onClick }: MenuProps) => (
  <button
    onClick={(e: any) => onClick(e)}
    className="outline-none bg-none border-none"
  >
    <HamburgerMenuIcon fill="white" />
  </button>
);
