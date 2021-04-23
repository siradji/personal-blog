import { Typography } from 'modules/atoms/typography';
import useScreenResize from 'hooks/useScreenResize';
import { FC, ReactNode } from 'react';

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
    <div className="w-96 md:w-1/4 hidden md:block shadow-sm p-4 rounded bg-transparent">
      <div className=" flex flex-col items-center space-y-4">
        <Typography variant="h1" color="dark" centered>
          {cardHeading}
        </Typography>
        <Typography variant="paragraph" color="dark" centered>
          {children}
        </Typography>
      </div>
    </div>
  );
};
