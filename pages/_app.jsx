import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

import { appWithTranslation } from 'next-i18next';
import { SSRProvider } from '@react-aria/ssr';

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default appWithTranslation(MyApp);
