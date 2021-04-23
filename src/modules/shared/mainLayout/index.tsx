import { FC, ReactNode, useState, useContext } from 'react';
import { Navbar } from 'modules/sections/Navbar';
import { SidebarContext } from 'shared-context';
export interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }: MainLayoutProps) => {
  const [isSideBarOpened, setSidebarStatus] = useState<boolean>(false);
  const value = { isSideBarOpened, setSidebarStatus };

  return (
    <SidebarContext.Provider value={value}>
      <div className="relative overflow-hidden">
        <Navbar />
        {children}
      </div>
    </SidebarContext.Provider>
  );
};
