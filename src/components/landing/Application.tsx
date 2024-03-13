import React from 'react'
import AplicatiomImage from "@/../public/images/appliction.png"
import Image from 'next/image'
import { optionsApplicatiion } from '@/helpers/utils/data'
import Android from "@/../public/images/android.png"
import Ios from "@/../public/images/ios.png"
const Application = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 mt-10 lg:mt-20'>
            <div className='relative w-[250px] h-[250px] lg:w-[450px] lg:h-[450px]'>
                <Image fill alt='' src={AplicatiomImage} />
            </div>
            <div>
                <h1 className='text-xl text-mode font-bold'>اپـلیـکیـشـن بـیـت‌آسیـا</h1>
                <p className='text-mode text-xs py-3'>همیشه و همه جا بازار معاملات خود را همراه داشته باشید و در لحظه به راحتی و با سرعت معامله کنید</p>
                <ul className='space-y-3 mt-4'>
                    {
                        optionsApplicatiion.map((option, idx) => (
                            <li className='text-white text-[12px] flex items-center gap-3' key={idx}>
                                <span className='block w-1 h-1 bg-white rounded-full'></span>
                                <p key={idx}>{option}</p>
                            </li>
                        ))
                    }
                </ul>
               <div className='flex items-center gap-10 mt-10'>
               <button className=' flex-1 flex gap-2 items-center justify-center rounded-lg p-3  border dark:bg-[#192330]'>
                    <Image width={20} height={20} src={Android} alt='' />
                    <span className='text-mode text-[14px]'>دانلود اندروید</span>
                </button>
                <button className='flex-1 flex gap-2 items-center justify-center rounded-lg p-3 border dark:bg-[#192330]'>
                    <Image width={20} height={20} src={Ios} alt='' />
                    <span className='text-mode text-[14px]'>دانلود ios</span>
                </button>
               </div>
            </div>
        </div>
    )
}

export default Application