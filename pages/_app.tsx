import type { AppProps } from 'next/app'
import { Layout } from 'components/layout'
import { Analytics } from 'components/analytics'
import { Header } from 'components/header'

import '../styles/globals.scss'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Header />
      <Layout>
        <Component {...pageProps} key={router.pathname} />
        <Analytics />
      </Layout>
    </>
  )
}

export default MyApp
