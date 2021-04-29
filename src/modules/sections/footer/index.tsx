import { useState, useCallback } from 'react';
import { Button, BuyMeCoffee } from 'modules/atoms/button/Button';
import { Container } from 'modules/shared';
import { FooterIcons } from 'modules/blocks/footerIcons';
import { HeaderLinks } from 'modules/blocks/HeaderLinks';
import { Typography } from 'modules/atoms/typography';
import useScreenResize from 'hooks/useScreenResize';
import { InputComponent } from 'modules/atoms/inputs';
import { Link } from 'modules/atoms/Link';

type formStateType = 'dirty' | 'untouched' | 'submitted' | 'loading';

export const Footer = () => {
  const [screenUtil] = useScreenResize();
  const [value, setValue] = useState('');
  const [formState, setFormState] = useState<formStateType>('untouched');

  const handleInputChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const handleSubmit = useCallback(() => {
    setFormState('loading');
  }, []);

  const handleFocus = useCallback(() => setFormState('dirty'), []);

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

            <div className="flex flex-col">
              <Typography variant="paragraph" color="white">
                Get notified when i drop off something new.
              </Typography>
              <div className="flex flex-row space-x-3">
                <InputComponent
                  placeholder="Enter your email"
                  value={value}
                  onChange={handleInputChange}
                  onFocus={handleFocus}
                  type="email"
                  variant="primary"
                />
                <Button onClick={handleSubmit} variant="fill-primary">
                  Join list
                </Button>
              </div>
            </div>
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
