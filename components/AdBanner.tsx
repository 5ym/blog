'use client'
import { usePathname } from 'next/navigation'
import Script from 'next/script'

const AdBanner = (props: {
  'data-ad-slot': string
  'data-ad-format': string
  'data-full-width-responsive': string
  className: string
}) => {
  const pathName = usePathname()
  return (
    <>
      <ins
        key={pathName}
        data-ad-client="ca-pub-4568277783171675"
        {...props}
        className={'adsbygoogle w-full ' + props.className}
      />
      <Script id="ads">{`(adsbygoogle = window.adsbygoogle || []).push({});`}</Script>
    </>
  )
}
export default AdBanner
