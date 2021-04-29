import React, { createContext, Dispatch, SetStateAction } from 'react';

interface contextInterface {
  isSideBarOpened: boolean;
  setSidebarStatus: Dispatch<SetStateAction<boolean>>;
}
export const SidebarContext = createContext<contextInterface>({
  isSideBarOpened: false,
  setSidebarStatus: () => {},
});
