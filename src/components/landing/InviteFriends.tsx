import React from 'react'
import InviteFriendsImg from "@/../public/images/Mobile-Marketing-bro.svg"
import Image from 'next/image'
const InviteFriends = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 px-5 lg:px-20 dark:bg-[#121b26]'>
        <div>
            <h1 className='text-[#407bff] text-2xl font-extrabold'>کسب درآمد میلیونی با دعوت از دوستان</h1>
            <p className='text-mode text-xs font-medium pt-6'>لورم ایپسوم متن ساختگی با تولید، چاپگرها و متون بورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده.</p>
            <button className='bg-[#407bff] text-white text-xs  rounded-lg p-3 px-4 mt-4'>اطلاعات بیشتر</button>
        </div>
        <div className='relative w-[250px] h-[250px] lg:w-[500px] lg:h-[500px]'>
            <Image fill src={InviteFriendsImg} alt=''/>
        </div>
    </div>
  )
}

export default InviteFriends