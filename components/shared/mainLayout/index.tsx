import { FC, ReactNode } from 'react';
import { Navbar } from 'components/sections/Navbar';

export interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }: MainLayoutProps) => (
  <main className="relative overflow-hidden">
    <Navbar />
    {children}
  </main>
);
