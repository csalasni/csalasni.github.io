import type { AppProps } from 'next/app'
import Layout from 'components/layout'
import '../styles/globals.scss'
import Analytics from 'components/analytics'
import Header from 'sections/header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Analytics />
    </Layout>
  )
}

export default MyApp
