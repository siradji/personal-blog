import { FC, ReactNode } from 'react';

export interface ContainerProps {
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }: ContainerProps) => (
  <div
    data-testid="main-container-cp"
    className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto"
  >
    {children}
  </div>
);
