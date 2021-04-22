import { FC } from 'react';

import { Link, LinkSize, LinkVariant } from 'components/atoms/Link';
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
          Blog
        </Link>
      </li>
      <li>
        <Link to="/" variant={linksColor} size={linksSize}>
          Recent Articles
        </Link>
      </li>
      <li>
        <Link to="/" variant={linksColor} size={linksSize}>
          Contact
        </Link>
      </li>
      <li>
        <Link to="/" variant={linksColor} size={linksSize}>
          eCommerce talk
        </Link>
      </li>
    </ul>
  </div>
);
