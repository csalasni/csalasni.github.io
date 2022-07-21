import type { AppProps } from 'next/app'
import Layout from 'components/layout'
import Analytics from 'components/analytics'
import Header from 'components/header'
import Transitions from 'components/transition'

import '../styles/globals.scss'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Header />
      <Layout>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Transitions path={router.pathname}>
            <Component {...pageProps} key={router.pathname} />
          </Transitions>
        </AnimatePresence>
        <Analytics />
      </Layout>
    </>
  )
}

export default MyApp
