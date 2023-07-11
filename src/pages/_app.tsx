import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '@/firebase/AuthProvider'
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { CookiesProvider } from 'react-cookie';

export default function App({ Component, pageProps }: AppProps) {
  return( 
  <AuthProvider>
    <CookiesProvider>
      <MantineProvider withNormalizeCSS withGlobalStyles>
        <Notifications>
          <Component {...pageProps} />
        </Notifications>
      </MantineProvider>
    </CookiesProvider>
  </AuthProvider>
  )
}
