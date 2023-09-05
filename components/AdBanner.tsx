'use client'
import Script from 'next/script'

const AdBanner = (props: {
  'data-ad-slot': string
  'data-ad-format': string
  'data-full-width-responsive': string
  className: string
}) => {
  return (
    <>
      <ins
        data-ad-client="ca-pub-4568277783171675"
        {...props}
        className={'adsbygoogle w-full ' + props.className}
      />
      <Script id="">{`(adsbygoogle = window.adsbygoogle || []).push({});`}</Script>
    </>
  )
}
export default AdBanner
