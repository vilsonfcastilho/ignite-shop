import Image from 'next/image';
import type { AppProps } from 'next/app';

import logoImg from '@/assets/shop-logo.svg';

import { globalStyles } from '@/styles/global';
import { Container, Header } from '@/styles/pages/app';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}
