import Head from 'next/head'
import Texts from 'utils/texts'

const Header = () => {
  return (
    <Head>
      <title>{Texts.title}</title>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="description" content={Texts.headDescription} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default Header
