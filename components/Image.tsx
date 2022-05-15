import NextImage, { ImageProps } from 'next/image'
import Link from 'next/link'

const Image = ({ ...rest }: ImageProps) => (
  <Link href={rest.src as string}>
    <a target="_blank">
      <NextImage {...rest} />
    </a>
  </Link>
)

export default Image
