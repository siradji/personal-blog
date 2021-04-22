import React, { FC, useEffect, useState } from 'react';

import { Logo } from 'components/atoms/logo';
import { HeaderLinks } from 'components/blocks/HeaderLinks';

import useScreenResize from 'hooks/useScreenResize';
import { SideBar } from './Sidebar';
import { Menu } from './MenuIcon';

export const Navbar: FC<{}> = () => {
  const [sidebarStatus, setSidebarStatus] = useState(false);
  const [screenDimension] = useScreenResize();

  const handleSideBarToggle = (e: React.MouseEvent<HTMLButtonElement>) => setSidebarStatus(!sidebarStatus);

  useEffect(() => {
    if (sidebarStatus) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'initial';
    }
  }, [sidebarStatus]);

  return (
    <header>
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
        <SideBar isOpened={sidebarStatus} closeModal={handleSideBarToggle} />
      </nav>
    </header>
  );
};
