import { Link } from 'modules/atoms/Link';
import {
  MessagerIcon,
  TwitterIcon,
  LinkedinIcon,
  MeduimIcon,
  TwitchIcon,
  StackoverflowIcon,
  GithubIcon,
} from 'modules/icons';

export const FooterIcons = () => (
  <div className="grid grid-cols-3 justify-items-center  gap-x-1 gap-y-5">
    <Link variant="dark" to="/" ext>
      <MeduimIcon />
    </Link>
    <Link variant="dark" to="/" ext>
      <TwitterIcon />
    </Link>
    <Link variant="dark" to="/" ext>
      <StackoverflowIcon />
    </Link>
    <Link variant="dark" to="/" ext>
      <GithubIcon />
    </Link>
    <Link variant="dark" to="/" ext>
      <LinkedinIcon />
    </Link>
    <Link variant="dark" to="/" ext>
      <MessagerIcon />
    </Link>
    <Link variant="dark" to="/" ext>
      <TwitchIcon />
    </Link>
  </div>
);
