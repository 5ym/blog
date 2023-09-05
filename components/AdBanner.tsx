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
    window.adsbygoogle?.push({})
  }, [pathName])
  return (
    <ins
      key={pathName}
      data-ad-client="ca-pub-4568277783171675"
      {...props}
      className={'adsbygoogle w-full ' + props.className}
    />
  )
}
export default AdBanner
