import React, {
  FC, useEffect, useState, useContext,
} from 'react';

import { Logo } from 'modules/atoms/logo';
import { HeaderLinks } from 'modules/blocks/HeaderLinks';

import useScreenResize from 'hooks/useScreenResize';
import { Menu } from 'modules/atoms/headerIcons';
import { SidebarContext } from 'shared-context';
import { Container } from 'modules/shared';
import { SideBar } from './Sidebar';

export const Navbar: FC<{}> = () => {
  const [sidebarStatus, setSidebarStatus] = useState(false);
  const [screenDimension] = useScreenResize();
  const { setSidebarStatus: updateContextStatus, isSideBarOpened } = useContext(
    SidebarContext,
  );

  const handleSideBarToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSidebarStatus(!sidebarStatus);
    updateContextStatus(!sidebarStatus);
  };

  useEffect(() => {
    if (sidebarStatus) {
      document.body.style.overflowY = 'hidden';
    }
    return () => {
      document.body.style.overflowY = 'initial';
    };
  }, [sidebarStatus]);

  return (
    <header>
      <nav className="bg-main-blue py-2 sticky top-0 shadow-md">
        <Container>
          <div className="flex justify-between items-center">
            <Logo mobile={screenDimension.isMobile} />
            {screenDimension.isMobile ? (
              <Menu onClick={handleSideBarToggle} />
            ) : (
              <HeaderLinks />
            )}
          </div>
        </Container>
      </nav>
      <SideBar isOpened={sidebarStatus} closeModal={handleSideBarToggle} />
    </header>
  );
};
