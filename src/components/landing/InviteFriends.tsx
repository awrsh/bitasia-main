import React from 'react'
import InviteFriendsImg from "@/../public/images/Mobile-Marketing-bro.svg"
import Image from 'next/image'
const InviteFriends = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 px-5 lg:px-20 dark:bg-black'>
      <div>
        <h1 className=' font-extrabold   text-[#407bff] text-3xl'>کسب درآمد میلیونی با دعوت از دوستان</h1>
        <p className='text-mode text-1xs font-medium pt-6'> با  دعوت از دوستان‌تان با لینک اختصاصی خود به بیت‌آسیا، تا 45% از کارمزد معاملاتشان پاداش دریافت کنید </p>
        <button className='bg-[#407bff] text-white text-1xs  rounded-lg p-3 px-4 mt-4'>اطلاعات بیشتر</button>
      </div>
      <div className='relative w-[250px] h-[250px] lg:w-[500px] lg:h-[500px]'>
        <Image fill src={InviteFriendsImg} alt='' />
      </div>
    </div>
  )
}

export default InviteFriends