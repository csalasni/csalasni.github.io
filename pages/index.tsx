import type { NextPage } from 'next'
import Script from 'next/script'
import Header from 'sections/header'
import Main from 'sections/main'

const Home: NextPage = () => {
  const gId = process.env.NEXT_PUBLIC_ANALYTICS_ID

  return (
    <div>
      <Header />
      <Main />

      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gId}}`}
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gId}');
        `}
      </Script>
    </div>
  )
}

export default Home
