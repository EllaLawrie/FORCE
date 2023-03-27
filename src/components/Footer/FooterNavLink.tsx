import Link from 'next/link'
import { FC } from 'react'

type Props = {
  name: string
  url: string
}

export default function FooterNavLink({ url, name }: Props) {
  return (
    <Link href={url} className='block text-xs text-[#384F63]'>
      {name}
    </Link>
  )
}
