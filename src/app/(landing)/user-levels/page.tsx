import React from 'react'
import BgUserLevels from "@/../public/images/user-levels.svg"
import Image from 'next/image'
import { user_levels, user_levles_table } from '@/helpers/utils/data'
import Table from '@/components/common/Table'
import { StyledTableCell, StyledTableRow } from '@/helpers/utils/mui'
const Page = () => {
    return (
        <div className='w-[80%] mx-auto mt-10'>
            {/* section 1 */}
            <section className='flex items-center justify-between'>
                <div className='lg:w-[500px]'>
                    <h1 className='font-bold text-3xl'>سطوح کاربری در بیت آسیا</h1>
                    <p className='mt-8 leading-10 text-justify'>
                        ما با هدف تسهیل فرآیند انجام معاملات و ایجاد بستری امن برای شما کاربران، سطوح کاربری متفاوتی را در بیت‌پین ایجاد کرده‌ایم تا کاربران بتوانند با توجه به میزان استفاده و نیاز خود، مدارک مورد نظر را بارگذاری کنند. سطوح کاربری در بیت‌پین شامل سه سطح بوده که جزئیات آن در زیر قابل مشاهده است.
                    </p>
                </div>
                <div className='lg:w-[400px]'>
                    <Image src={BgUserLevels} alt='' />
                </div>
            </section>
            {/* section 2 */}
            <section className='lg:mt-[200px] space-y-24'>
                {
                    user_levels.map((level, idx) => (
                        <div key={idx} className='bg-gray-200/50 dark:bg-[#222] rounded-lg p-5 relative'>
                            <div className='bg-[#f2f2f2] border dark:bg-[#333] w-fit p-5 rounded-xl  absolute -top-6 right-0' key={idx}>
                                <p className=' dark:text-green-500'>{level.title}</p>
                            </div>
                            <p className='pt-12 pb-2 leading-8'>{level.description}</p>
                        </div>
                    ))
                }
            </section>

            <div className='my-[140px]'>
                <Table header={["سطح کاربری", "سقف برداشت تومانی", "سقف برداشت رمز ارزی", "سقف واریزتومانی", "سقف واریز رمز ارزی", "مدارک احراز هویت"]}>
                    {
                        user_levles_table.map((level, idx) => (
                            <StyledTableRow key={idx}>
                                <StyledTableCell className='text-center'>{level.level}</StyledTableCell>
                                <StyledTableCell className='text-center'>{level.widthdraw_toman}</StyledTableCell>
                                <StyledTableCell className='text-center'>{level.widthdraw_crypto}</StyledTableCell>
                                <StyledTableCell className='text-center'>{level.deposit_toman}</StyledTableCell>
                                <StyledTableCell className='text-center'>{level.deposit_crypto}</StyledTableCell>
                                <StyledTableCell className='text-center' width="180">
                                    <div className='space-y-1'>
                                        {level.row.map((row, idx) => (
                                            <div  className='text-start flex gap-2' key={idx}>
                                                <span className='block w-2 h-2 bg-green-500 rounded-full'></span>
                                                <p className='text-xs whitespace-nowrap'>{row}</p>
                                            </div>
                                        ))}
                                    </div>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))
                    }
                </Table>
            </div>
        </div>
    )
}

export default Page