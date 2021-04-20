import { FC } from 'react';

export const Logo: FC<{}> = () => (
  <div data-testid="main-logo-cp">
    <h1 className="text-4xl text-main-white">
      JS
      {' '}
      <span className="text-4xl text-main-red"> Fans</span>
      {' '}
      <span className="text-5xl text-main-red m-0 p-0">.</span>
    </h1>
  </div>
);
