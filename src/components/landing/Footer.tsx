import Image from 'next/image'
import React from 'react'
import Logo from "@/../public/images/logo.svg"
import { footer, social_media } from '@/helpers/utils/data'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className='dark:bg-dark_deep px-5 lg:px-20 mt-20 bg-[#eee]'>
      <div className='flex flex-col lg:flex-row gap-5 lg:gap-14'>
        <div>
          <div className='relative w-[200px] h-[100px] lg:w-[300px] lg:h-[160px]'>
            <Image src={Logo} alt='' fill />
          </div>
          <p className='text-mode text-xs'>پاسخگویی هر روز 9 صبح الی 17</p>
          <a className='text-mode pt-2 text-xs block'>support@bitasia.ir</a>
        </div>
        <ul className='grid grid-cols-2 lg:grid-cols-3 gap-8 flex-1 lg:py-10'>
          {
            footer.map((item, idx) => (
              <div key={idx}>
                <h1 className='text-[#407bff] font-bold '>{item.title}</h1>
                <div className='mt-3 space-y-4'>
                  {item.options.map((option, idx) => (
                    <li className='text-mode' key={idx}>
                      <Link href={option.url}>{option.name}</Link>
                    </li>
                  ))}
                </div>
              </div>
            ))
          }
        </ul>
      </div>
      <div className='w-full h-px mt-4 bg-gray-100' />
      <div className='py-7 flex flex-col lg:flex-row items-center justify-between'>
        <p className='text-mode text-xs'>طراحی سایت بـیـت‌آسیـا</p>
        <div className='flex mt-3 items-center gap-6'>
          {social_media.map((social, idx) => (
            <a key={idx} className=' w-11 h-9 flex justify-center items-center rounded-xl border border-white'>
              <social.icon size={20} className='text-mode'/>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer