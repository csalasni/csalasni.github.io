import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Layout } from 'components/layout'
import { Analytics } from 'components/analytics'
import { Texts } from 'utils/texts'

import '../styles/globals.scss'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>{Texts.title}</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content={Texts.headDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} key={router.pathname} />
        <Analytics />
      </Layout>
    </>
  )
}

export default MyApp
