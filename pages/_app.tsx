import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Layout } from 'components/layout'
import { Analytics } from 'components/analytics'
import { Texts } from 'utils/texts'

import '../styles/globals.scss'
import { ThemeProvider } from 'utils/theme-context'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>{Texts.toolbar}</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content={Texts.description} />
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
