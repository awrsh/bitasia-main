import Image from 'next/image'
import React from 'react'
import Logo from "@/../public/images/logo.png"
import { menus } from '@/helpers/utils/data'
import Link from 'next/link'
const Header = () => {
  return (
    <header className='bg-dark_blue px-5 lg:px-10 sticky top-0 z-50 py-3 flex items-center justify-between'>
      <div className='flex items-center gap-8'>
        <Image width={170} height={170} src={Logo} alt='' />
        <div className=' items-center gap-4 hidden lg:flex'>
          {menus.map((menu, idx) => (
            <Link className='block text-white font-medium' href={menu.url} key={idx}>
             {menu.name}
            </Link>
          ))}
        </div>
      </div>
     <Link className='block font-bold border rounded-lg p-2 border-green-500 text-white' href={""}>
      ورود‌وثبت‌نام
     </Link>
    </header>
  )
}

export default Header