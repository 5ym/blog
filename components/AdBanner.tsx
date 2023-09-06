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
    <div key={pathName} className={'w-full ' + props.className}>
      <ins
        data-ad-client="ca-pub-4568277783171675"
        data-ad-slot={props['data-ad-slot']}
        data-ad-format={props['data-ad-format']}
        data-full-width-responsive={props['data-full-width-responsive']}
        className="adsbygoogle"
        style={{ display: 'block' }}
      />
      <Script
        id="ads"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4568277783171675"
        async
        onReady={() => {
          let noError = true
          while (noError) {
            try {
              window.adsbygoogle?.push({})
            } catch (error) {
              noError = false
            }
          }
        }}
      />
    </div>
  )
}
export default AdBanner
