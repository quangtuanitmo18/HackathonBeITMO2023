/* eslint-disable @next/next/no-page-custom-font */
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import { Open_Sans } from 'next/font/google'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
const open_sans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open_Sans'
})

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // use react query
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: false
          }
        }
      })
  )
  // per-page layout
  const getLayout = Component.getLayout ?? ((page) => page)

  // font

  return (
    <>
      <style jsx global>{`
        :root {
          --font-primary: ${open_sans.style.fontFamily};
        }
      `}</style>
      <div className={` ${open_sans.variable}   font-primary`} id='app'>
        <Head>
          <title>Hackathon be ITMO</title>
          <meta
            name='description'
            content='the health and wellbeing management systems of university students and staff.'
          />
          {/* <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta> */}

          {/* <link rel='icon' href='/LogoRisenLuxumi.svg' /> */}
        </Head>

        <main>
          <QueryClientProvider client={queryClient}>
            {/* <AuthProvider> */}
            {/* <RefreshToken> */}
            {/* <WishListProvider> */}
            <Hydrate state={pageProps.dehydratedState}>
              {/* <ErrorBoundary> */}
              {/* <SearchHistoryProvider> */}
              {getLayout(<Component {...pageProps} />)}
              {/* </SearchHistoryProvider> */}
              {/* </ErrorBoundary> */}
              <ReactQueryDevtools initialIsOpen={false} />
              <ToastContainer />
            </Hydrate>
            {/* </WishListProvider> */}
            {/* </RefreshToken> */}
            {/* </AuthProvider> */}
          </QueryClientProvider>
        </main>
      </div>
    </>
  )
}
