import Script from "next/script"

const AdBanner = (props) => {
  return (<>
    <ins
      className="adsbygoogle mt-4"
      data-ad-client="ca-pub-4568277783171675"
      {...props}
    />
    <Script>
      (adsbygoogle = window.adsbygoogle || []).push({});
      console.log(window.adsbygoogle)
    </Script>
  </>)
}
export default AdBanner
