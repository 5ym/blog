import { useEffect, useRouter } from 'react'

const AdBanner = (props) => {
  const { asPath } = useRouter()
  useEffect(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.log(err)
    }
  }, [asPath])

  return (
    <ins
      key={asPath}
      className="adsbygoogle mt-4"
      data-ad-client="ca-pub-4568277783171675"
      {...props}
    />
  )
}
export default AdBanner
