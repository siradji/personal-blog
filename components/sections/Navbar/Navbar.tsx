import React, { FC, MouseEvent, useEffect, useState } from 'react';

import { Logo } from 'components/atoms/logo';
import { HeaderLinks } from 'components/blocks/HeaderLinks';

import useScreenResize from 'hooks/useScreenResize';
import { HamburgerMenuIcon } from 'components/icons';

export const Navbar: FC<{}> = () => {
  const  [sidebarStatus, setSidebarStatus] = useState(false);
  const [screenDimension] = useScreenResize();

  const handleSideBarToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
      setSidebarStatus(!sidebarStatus)
  };

  useEffect(() => {
        if(sidebarStatus) {
          document.body.style.overflowY = "hidden"
        } else {
          document.body.style.overflowY = "initial"
        }
  }, [sidebarStatus])
  
  return (
    <nav className="bg-main-blue shadow-lg py-2 sticky top-0">
      <div className="main-container">
        <div className="flex flex-row justify-between items-center">
          <Logo />
          {screenDimension.isMobile ? (
            <Menu onClick={handleSideBarToggle} />
          ) : (
            <HeaderLinks />
          )}
        </div>
      </div>
     {sidebarStatus && <SideBar closeModal={handleSideBarToggle} /> }
    </nav>
  );
};

export interface MenuProps {
  onClick: (e: any) => void;
}

export const Menu: FC<MenuProps> = ({ onClick }: MenuProps) => (
  <button onClick={ (e: MouseEvent) => onClick(e)} className="outline-none bg-none border-none">
    <HamburgerMenuIcon fill="white" />
  </button>
);


export const SideBar = ({closeModal}) => {

    return (
        <div className="bg-soft-blue shadow-md h-screen w-4/5 z-50   py-2 px-5 fixed top-0 right-0">
          <div>
             <Menu onClick={closeModal} />
             <HeaderLinks flow="mobile" />
          </div>
        </div>
    )
}