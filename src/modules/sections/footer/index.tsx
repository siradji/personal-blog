import { BuyMeCoffee } from 'modules/atoms/button/Button';
import { Container } from 'modules/shared';
import { FooterIcons } from 'modules/blocks/footerIcons';
import { HeaderLinks } from 'modules/blocks/HeaderLinks';
import { Typography } from 'modules/atoms/typography';
import useScreenResize from 'hooks/useScreenResize';
import { Link } from 'modules/atoms/Link';
import { EmailSubForm } from '@modules/blocks/email-sub-form';

type formStateType = 'dirty' | 'untouched' | 'submitted' | 'loading';

export const Footer = () => {
  const [screenUtil] = useScreenResize();

  return (
    <footer className=" bg-main-blue px-3 py-10">
      <Container>
        <div className="flex flex-col space-y-4  md:space-y-0 md:flex-row justify-between">
          <div className="flex flex-col space-y-3">
            <FooterIcons />
            <Typography variant="paragraph" bold color="white" centered>
              copyright @ Suraj Auwal 2021
            </Typography>
          </div>
          <div className="flex flex-col space-y-1 justify-between">
            <div className="">
              <ul className="flex flex-col space-y-1">
                <li>
                  <Link to="/" variant="white" ext>
                    Spot a bug on this site? open an issue
                  </Link>
                </li>
                <li>
                  <Link to="/" variant="white" ext>
                    Want to improve site?
                  </Link>
                </li>
                <li>
                  <Link to="/" variant="white" ext>
                    Collab on a project
                  </Link>
                </li>
              </ul>
            </div>

            <EmailSubForm />
          </div>
          <div className="flex flex-col space-y-4  justify-between">
            {!screenUtil.isMobile && <HeaderLinks footer />}
            <BuyMeCoffee />
          </div>
        </div>
      </Container>
    </footer>
  );
};
