import Script from 'next/script'

export const Analytics = () => {
  const gId = process.env.NEXT_PUBLIC_ANALYTICS_ID

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gId}`}
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gId}');
        `}
      </Script>
    </>
  )
}
