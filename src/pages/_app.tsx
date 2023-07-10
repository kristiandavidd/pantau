import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '@/firebase/AuthProvider'
import { MantineProvider } from "@mantine/core";
import { CookiesProvider } from 'react-cookie';

export default function App({ Component, pageProps }: AppProps) {
  return( 
  <AuthProvider>
    <CookiesProvider>
      <MantineProvider withNormalizeCSS withGlobalStyles>
        <Component {...pageProps} />
      </MantineProvider>
    </CookiesProvider>
  </AuthProvider>
  )
}
