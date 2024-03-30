import Image from 'next/image'
import React from 'react'
import BgCommission from "@/../public/images/commission.png"
import Table from '@/components/common/Table'
import { user_levles_table } from '@/helpers/utils/data'
import { StyledTableCell, StyledTableRow } from '@/helpers/utils/mui'
import TabsCommission from '@/components/landing/TabsCommission'
const Page = () => {
    return (
        <div className='w-[80%] mx-auto mt-20'>
            {/* section 1 */}
            <section className='flex items-center justify-between'>
                <div className='lg:w-[500px]'>
                    <h1 className='font-bold text-3xl'>کارمزد و خدمات تسویه در بیت آسیا</h1>
                    <p className='mt-8 leading-10 text-justify'>
                        در بیت‌آسیا با هدف حفظ و افزایش امنیت، کیفی و سرعت ارائه‌‌ی خدمات، درصدی از حجم معاملات کاربران تحت عنوان کارمزد از آنان دریافت می‌شود. با افزایش فعالیت معاملاتی کاربران، میزان این کارمزد کاهش می‌یابد و کاربران تخفیف دریافت می‌کنند. ضمنا کارمزد واریز و برداشت رمز ارز به عنوان هزینه‌ی انتقال توسط شبکه‌ی آن‌ها اخذ می‌گردد.                    </p>
                </div>
                <div className='lg:w-[400px]'>
                    <Image src={BgCommission} alt='' />
                </div>
            </section>
            <TabsCommission />
            {/* <div className='my-[140px]'>
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
                                            <div className='text-start flex gap-2' key={idx}>
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
            </div> */}
        </div>
    )
}

export default Page