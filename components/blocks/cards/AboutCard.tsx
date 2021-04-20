import { FC, ReactNode } from 'react';

export interface AboutCardInterface {
  children: ReactNode;
  cardHeading: string;
}
export const AboutCard: FC<AboutCardInterface> = ({
  children,
  cardHeading,
}: AboutCardInterface) => (
  <div className="w-40 shadow-lg p-4 rounded-sm bg-soft-blue">
    <div className=" flex flex-col">
      <h1 className="text-main-white text-2xl text-center">{cardHeading}</h1>
      <p className="text-center text-base text-main-white">{children}</p>
    </div>
  </div>
);
