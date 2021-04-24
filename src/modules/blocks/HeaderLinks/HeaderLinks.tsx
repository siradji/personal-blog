import { FC } from 'react';

import { Link, LinkSize, LinkVariant } from 'modules/atoms/Link';
import clsx from 'clsx';

type HeaderLinksDirection = 'mobile' | 'desktop';
export interface HeaderLinksProps {
  linksColor?: LinkVariant;
  linksSize?: LinkSize;
  flow?: HeaderLinksDirection;
}

const HeaderTypeMapper: Record<HeaderLinksDirection, string> = {
  desktop: 'flex-row md:space-x-4',
  mobile: 'flex-col space-y-4',
};

export const HeaderLinks: FC<HeaderLinksProps> = ({
  linksColor = 'white',
  linksSize = 'md',
  flow = 'desktop',
}) => (
  <div data-testid="main-headerlinks-cp">
    <ul className={clsx('flex justify-between ', HeaderTypeMapper[flow])}>
      <li>
        <Link to="/" variant={linksColor} size={linksSize}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/" variant={linksColor} size={linksSize}>
          Let's Build!
        </Link>
      </li>
      <li>
        <Link to="/" variant={linksColor} size={linksSize}>
          How to?
        </Link>
      </li>
      <li>
        <Link to="/" variant={linksColor} size={linksSize}>
          What is?
        </Link>
      </li>
      <li>
        <Link to="/" variant={linksColor} size={linksSize}>
          About me
        </Link>
      </li>
      <li>
        <Link to="/" variant={linksColor} size={linksSize}>
          Contact
        </Link>
      </li>
    </ul>
  </div>
);
