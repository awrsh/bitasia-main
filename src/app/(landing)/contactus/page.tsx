import React from 'react'
import Countus from "@/../public/images/Contact_us.webp"
import Image from 'next/image'
import Input from '@/components/common/Input'
import Textare from '@/components/common/Textare'
const Page = () => {
    return (
        <div className='layout mt-10'>
            <Image src={Countus} alt='' />
            <h1 className='text-xl font-extrabold text-center mt-10'>با ما در تماس باشید</h1>
            <form className='w-[95%] lg:w-[500px] mx-auto flex flex-col gap-2 lg:gap-4 mt-10'>
                <Input required title='نام و نام خانوادگی'/>
                <Input required title='ایمیل'/>
                <Textare required title='پیام'/>
                <div className='flex justify-between mt-10 items-center'>
                    <button className='bg-green-500 py-2 rounded-lg px-8 text-[14px] text-white'>ارسال</button>
                    <button className='bg-green-500 py-2 rounded-lg px-8 text-[14px] text-white'>پیام به تلگرام</button>
                </div>
            </form>
        </div>
    )
}

export default Page