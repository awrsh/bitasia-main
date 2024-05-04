import React from 'react'

const RialWithdrawalSchedule = () => {
    return (
        <div className='bg-[#f2f2f2] dark:bg-[#222] flex flex-col gap-9 p-10 mt-10 rounded-lg'>
            <div className='flex items-center gap-10 w-full justify-between '>
                <p>ساعت درخواست</p>
                <p>23تا10صبح</p>
                <p>10 صبح تا 12</p>
                <p>12 تا 13</p>
                <p>روز تعطیل</p>
            </div>
            <div className='w-full h-px bg-gray-300/50 dark:bg-[#333]'/>
            <div className='flex items-center gap-10 w-full justify-between '>
                <p>تمامی‌بانک‌ها</p>
                <p>ساعت11الی13</p>
                <p>ساعت16الی18</p>
                <p>ساعت4الی6صبح</p>
                <p>بدون واریز</p>
            </div>
        </div>
    )
}

export default RialWithdrawalSchedule