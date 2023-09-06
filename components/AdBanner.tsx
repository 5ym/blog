'use client'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect } from 'react'

const AdBanner = (props: {
  'data-ad-slot': string
  'data-ad-format': string
  'data-full-width-responsive': string
  className: string
}) => {
  const LoadAds = useCallback(() => {
    if (window.adsbygoogle === undefined) {
      const script = document.createElement('script')
      script.src =
        'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4568277783171675'
      script.async = true
      document.body.appendChild(script)
    } else {
      console.log('loaded')
      window.adsbygoogle?.push({})
    }
  }, [])
  useEffect(() => {
    LoadAds()
  }, [LoadAds])
  return (
    <ins
      data-ad-client="ca-pub-4568277783171675"
      data-ad-slot={props['data-ad-slot']}
      data-ad-format={props['data-ad-format']}
      data-full-width-responsive={props['data-full-width-responsive']}
      className={'adsbygoogle w-full ' + props.className}
      style={{ display: 'block' }}
    />
  )
}
export default AdBanner
