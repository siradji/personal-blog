import clsx from 'clsx';
import { FC, ReactNode, useContext } from 'react';
import { SidebarContext } from 'shared-context';
export interface ContainerProps {
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }: ContainerProps) => {
  // const { isSideBarOpened } = useContext(SidebarContext);
  return (
    <div
      data-testid="main-container-cp"
      className={clsx(
        'sm:max-w-screen-sm md:max-w-screen-lg lg:max-w-screen-xl mx-auto',
      )}
    >
      {children}
      {/* <div
        className={clsx(
          'main-overlay-cp transition-opacity duration-500 ease-in-out',
          isSideBarOpened && 'overlay-active',
        )}
      /> */}
    </div>
  );
};
