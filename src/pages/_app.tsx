import '../styles/globals.css';
import '../styles/responsive.css';

import { MainLayout } from 'modules/shared/mainLayout';

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;