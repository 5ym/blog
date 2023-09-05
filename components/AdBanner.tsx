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
        style={{ display: 'block' }}
        data-ad-client="ca-pub-4568277783171675"
        {...props}
        className={'adsbygoogle ' + props.className}
      />
      <Script id="adsense">{`(adsbygoogle = window.adsbygoogle || []).push({});`}</Script>
    </>
  )
}
export default AdBanner
