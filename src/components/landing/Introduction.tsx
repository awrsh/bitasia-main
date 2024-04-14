import Image from 'next/image'
import React from 'react'
import Ad from "@/../public/images/pngfind.com-crypto-png-4881966.png"
import Link from 'next/link'
import Shape from "@/../public/images/shape.svg"
const Introduction = () => {
    return (
        <div className='bg-white dark:bg-black'>
            <div className='flex flex-col lg:flex-row bg-white dark:bg-black lg:px-10 items-center pt-20'>
                <div className='px-5 lg:px-0 lg:w-1/2'>
                    <h1 className='font-extrabold text-[2.90rem] text-[#407BFF]'>بازار معاملاتی ارز دیجیتال بیت آسیا</h1>
                    <p className='font-bold text-justify pt-7 text-mode text-2xl '>سریع ، امن و بی‌واسطه معامله کنید</p>
                    <a className='block border text-[14px] text-[#407BFF] border-[#407bff]  font-bold w-fit rounded-lg p-2 mt-6' href="https://dashboard.bitasia.ir/">ورود به پنل کاربری</a>
                </div>
                <div className="relative w-[250px] mt-10 lg:mt-0 h-[250px] lg:w-1/2  object-fill lg:h-[550px] mx-auto ">
                    <Image fill src={Ad} alt='' />
                </div>
            </div>
            {/* <Image className='w-full hidden  dark:lg:block -mt-20 object-cover' src={Shape} alt=''/> */}
        </div>
    )
}

export default Introduction