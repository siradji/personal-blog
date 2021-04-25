import clsx from 'clsx';
import { FC } from 'react';

type Props = {
  mobile: boolean;
};
export const Logo: FC<Props> = ({ mobile }) => {
  const classes = mobile ? 'text-2xl' : 'text-4xl';
  return (
    <div data-testid="main-logo-cp">
      <h1 className={clsx(' text-main-white md:text-3xl', classes)}>
        Awesome
        <span className={clsx('text-main-red', classes)}> JavaScript</span>
      </h1>
    </div>
  );
};
