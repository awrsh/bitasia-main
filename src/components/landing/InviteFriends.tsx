import React from 'react'
import InviteFriendsImg from "@/../public/images/invitefriends.svg"
import Image from 'next/image'
const InviteFriends = () => {
  return (
    <div className='flex items-center justify-between gap-20 px-20 bg-[#121b26]'>
        <div>
            <h1 className='text-[#ff9900] text-2xl font-extrabold'>کسب درآمد میلیونی با دعوت از دوستان</h1>
            <p className='text-white text-xs font-medium pt-6'>لورم ایپسوم متن ساختگی با تولید، چاپگرها و متون بورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده.</p>
            <button className='bg-green-500 text-xs text-white rounded-lg p-3 px-4 mt-4'>اطلاعات بیشتر</button>
        </div>
        <div className='relative w-[500px] h-[500px]'>
            <Image fill src={InviteFriendsImg} alt=''/>
        </div>
    </div>
  )
}

export default InviteFriends