import { AuthProvider } from '@/firebase/AuthProvider'
import { NextUIProvider } from '@nextui-org/react';
import '@/styles/globals.css'
import { MantineProvider } from "@mantine/core";
import type { AppProps } from 'next/app'
import { CookiesProvider } from 'react-cookie';

export default function App({ Component, pageProps }: AppProps) {
  return( 
  <AuthProvider>
    <CookiesProvider>
      <MantineProvider withNormalizeCSS withGlobalStyles>
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </MantineProvider>
    </CookiesProvider>
  </AuthProvider>
  )
}
