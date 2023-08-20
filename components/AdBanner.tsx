import Script from 'next/script'

const AdBanner = (props: { 'data-ad-slot': string }) => {
  return (
    <>
      <ins className="adsbygoogle mt-4 block" data-ad-client="ca-pub-4568277783171675" {...props} />
      <Script
        id={props['data-ad-slot']}
      >{`(adsbygoogle = window.adsbygoogle || []).push({});`}</Script>
    </>
  )
}
export default AdBanner
