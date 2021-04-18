
import {FC} from 'react';

import {Link, LinkSize, LinkVariant } from 'components/atoms/Link'

export interface HeaderLinksProps  { 
    linksColor?: LinkVariant,
    linksSize?: LinkSize
}





export const HeaderLinks: FC<HeaderLinksProps> = ({linksColor = "white", linksSize = "md"}) => {
    return (
        <div data-testid="main-headerlinks-cp">
            <ul className="flex flex-row justify-between">
                <li>
                <Link
                to="/"
                 variant={linksColor}
                 size={linksSize}
                >
                    Home
                </Link>
                </li>
                <li>
                <Link
                to="/"
                 variant={linksColor}
                 size={linksSize}
                >
                    Blog
                </Link>
                </li>
                <li>
                <Link
                to="/"
                 variant={linksColor}
                 size={linksSize}
                >
                    Recent Articles
                </Link>
                </li>
                <li>
                <Link
                to="/"
                 variant={linksColor}
                 size={linksSize}
                >
                    Contact
                </Link>
                </li>
                <li>
                <Link
                to="/"
                 variant={linksColor}
                 size={linksSize}
                >
                    eCommerce talk
                </Link>
                </li>
            </ul>
        </div>
    )
}