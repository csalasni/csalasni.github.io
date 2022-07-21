import type { AppProps } from 'next/app'
import Layout from 'components/layout'
import '../styles/globals.scss'
import Analytics from 'components/analytics'
import Header from 'components/header'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Header />
      <Layout>
        <Component {...pageProps} key={router.route} />
        <Analytics />
      </Layout>
    </>
  )
}

export default MyApp
