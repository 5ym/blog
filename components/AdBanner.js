import { useEffect } from 'react'

const AdBanner = (props) => {
  useEffect(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.log(err)
    }
  }, [])

  return <ins className="adsbygoogle mt-4" data-ad-client="ca-pub-4568277783171675" {...props} />
}
export default AdBanner
