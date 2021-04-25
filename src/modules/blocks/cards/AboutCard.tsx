import React, { FC, ReactNode } from 'react';
import useScreenResize from 'hooks/useScreenResize';

import { Typography } from 'modules/atoms/typography';
import { BuyMeCoffee } from 'modules/atoms/button/Button';

export interface AboutCardInterface {
  children: ReactNode;
  cardHeading: string;
}
export const AboutCard: FC<AboutCardInterface> = ({
  children,
  cardHeading,
}: AboutCardInterface) => {
  const [mobileUtil] = useScreenResize();

  return (
    <div className="w-full lg:w-1/4 shadow-sm p-4 rounded bg-transparent">
      <div className=" flex flex-col items-center space-y-4">
        <Typography variant="h1" color="dark" centered>
          {cardHeading}
        </Typography>
        <Typography variant="paragraph" color="dark" centered>
          {children}
        </Typography>
        <div>
          <BuyMeCoffee />
        </div>
      </div>
    </div>
  );
};
