import { AuthProvider } from '@/firebase/AuthProvider'
import { NextUIProvider } from '@nextui-org/react';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return( 
  <AuthProvider>
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  </AuthProvider>
  )
}
