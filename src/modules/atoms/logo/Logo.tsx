import clsx from 'clsx';
import { FC } from 'react';

type Props = {
  mobile: boolean;
};
export const Logo: FC<Props> = ({ mobile }) => {
  const classes = mobile ? 'text-2xl' : 'text-4xl';
  return (
    <div data-testid="main-logo-cp">
      {mobile ? (
        <h1 className={clsx(' text-main-white', classes)}>
          JS
          <span className={clsx('text-main-red', classes)}> Fanboy</span>
        </h1>
      ) : (
        <h1 className={clsx(' text-main-white', classes)}>
          The JavaScript
          <span className={clsx('text-main-red', classes)}> Fanboy</span>
        </h1>
      )}
    </div>
  );
};
