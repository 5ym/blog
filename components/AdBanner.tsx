'use client'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const AdBanner = (props: {
  'data-ad-slot': string
  'data-ad-format': string
  'data-full-width-responsive': string
  className: string
}) => {
  const pathName = usePathname()
  useEffect(() => {
    try {
      console.log(window.adsbygoogle)
      window.adsbygoogle?.push({})
    } catch (error) {
      console.error(error)
    }
  }, [pathName])
  return (
    <div key={pathName} className={'w-full ' + props.className}>
      <ins
        key={pathName}
        data-ad-client="ca-pub-4568277783171675"
        data-ad-slot={props['data-ad-slot']}
        data-ad-format={props['data-ad-format']}
        data-full-width-responsive={props['data-full-width-responsive']}
        className="adsbygoogle"
        style={{ display: 'block' }}
      />
    </div>
  )
}
export default AdBanner
