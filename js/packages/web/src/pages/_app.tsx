import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/index.less';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>NiftyBees | NFTs on Solana</title>
      </Head>
      <div id="root" >
        <Component {...pageProps} />
      </div>
    </div>
  );
}
