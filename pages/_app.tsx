import Head from 'next/head';
import Script from 'next/script';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalStyled from '@styles/GlobalStyled';
import theme from '@styles/theme';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" type="image/x-icon" />
      </Head>

      {/* Google Tag Manager */}
      <Script
        id="google-tag-manager-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-K8RCH89');
              `,
        }}
      />
      {/* End Google Tag Manager */}

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          title="google-tag-manager-no-script"
          src="https://www.googletagmanager.com/ns.html?id=GTM-K8RCH89"
          height="0"
          width="0"
          style={{
            display: 'none',
            visibility: 'hidden',
          }}
        />
      </noscript>
      {/* End Google Tag Manager (noscript) */}

      <GlobalStyled />

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
