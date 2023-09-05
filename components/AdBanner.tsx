'use client'
import { usePathname } from 'next/navigation'

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
      <script key={pathName}>{`(adsbygoogle = window.adsbygoogle || []).push({});`}</script>
    </>
  )
}
export default AdBanner
