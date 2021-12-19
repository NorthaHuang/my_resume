import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';

import GlobalStyled from '@styles/GlobalStyled';
import theme from '@styles/theme';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" type="image/x-icon" />
      </Head>

      <GlobalStyled />

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
