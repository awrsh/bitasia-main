import Image from 'next/image'
import React from 'react'
import Logo from "@/../public/images/logo.png"
import { footer } from '@/helpers/utils/data'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer>
      <div>
        <Image src={Logo} alt='' />
        <p>پاسخگویی هر روز 9 صبح الی 17</p>
        <a>support@bitasia.ir</a>
      </div>
      <div>
      <ul>
        <h1>{footer.guide.title}</h1>
        {footer.guide.options.map((option, idx) =>(
          <Link href={option.url} className='' key={idx}>{option.name}</Link>
        ))}
      </ul>
      </div>
    </footer>
  )
}

export default Footer