"use client"
import Image from 'next/image'
import React, { useContext, useEffect } from 'react'
import Logo from "@/../public/images/logo.svg"
import { menus } from '@/helpers/utils/data'
import Link from 'next/link'
import { MdDarkMode } from 'react-icons/md'
import ThemeButton from '../common/ThemeButton'
const Header = () => {



  return (
    <header className='bg-[#fff] shadow-md dark:bg-dark_blue px-5 lg:px-10 sticky top-0 z-50 py-3 flex items-center justify-between'>
      <div className='flex items-center gap-14'>
        <Link href="/">
          <Image width={170} height={170} src={Logo} alt='' />
        </Link>
        <div className=' items-center gap-7 hidden lg:flex'>
          {menus.map((menu, idx) => (
            <Link className='block text-mode font-medium' href={menu.url} key={idx}>
              {menu.name}
            </Link>
          ))}
        </div>
      </div>
      <div className='flex items-center gap-3 '>
        <ThemeButton />
        <a className='block font-bold border rounded-lg p-2  border-gray-500 dark:border-green-500 text-gray-600 dark:text-white' href="https://dashboard.bitasia.ir">
          ورود‌ و ثبت‌نام
        </a>
      </div>
    </header>
  )
}

export default Header