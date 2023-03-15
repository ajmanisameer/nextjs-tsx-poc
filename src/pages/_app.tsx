import '../styles/global.css';

import type { AppProps } from 'next/app';
import Script from 'next/script';
import { UserProvider } from '@auth0/nextjs-auth0/client';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <UserProvider>
      <Script
        id="my-script"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="my-script" strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <Component {...pageProps} />
    </UserProvider>
  </>
);

export default MyApp;
