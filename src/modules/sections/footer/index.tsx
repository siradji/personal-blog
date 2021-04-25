import { BuyMeCoffee } from 'modules/atoms/button/Button';
import { Container } from 'modules/shared';
import { FooterIcons } from 'modules/blocks/footerIcons';
import { HeaderLinks } from 'modules/blocks/HeaderLinks';
import { Typography } from 'modules/atoms/typography';
import useScreenResize from 'hooks/useScreenResize';

export const Footer = () => {
  const [screenUtil] = useScreenResize();
  return (
    <footer className=" bg-main-blue px-3 py-10">
      <Container>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col space-y-3">
            <FooterIcons />
            <Typography variant="paragraph" bold color="white" centered>
              copyright @ Suraj Auwal 2021
            </Typography>
          </div>
          <div className="flex flex-col space-y-4 mt-2">
            {!screenUtil.isMobile && <HeaderLinks footer />}
            <BuyMeCoffee />
          </div>
        </div>
      </Container>
    </footer>
  );
};
