import React from 'react'
import AboutImg from "@/../public/images/About us page-pana.svg"
import Image from 'next/image'
import StoryImg from "@/../public/images/International trade-cuate.svg"
import GiftImg from "@/../public/images/Product tour-rafiki.svg"
import Guide from "@/../public/images/Guide.webp"
import Link from 'next/link'
const Page = () => {
    return (
        <div className='dark:bg-black'>
            <div className='layout mt-10'>
                <h1 className='text-center text-2xl font-extrabold mt-10'>درباره ما</h1>
                <div className='flex flex-col lg:flex-row items-center mt-10'>
                    <div className='flex-1'>
                        <h6 className='font-bold text-xl relative after:absolute after:w-10 after:-bottom-2 after:rounded-xl after:right-0 after:h-1 after:bg-[#407bff]'>درباره ما
                        </h6>
                        <p className='pt-8 text-justify leading-10'>
                        •
                            به طور حتم سایت‌های بسیاری در دنیا و داخل کشور در ارتباط با حوزه معاملات رمز ارزها وجود دارند. پلتفرم‌هایی که به واسطه پیشرفت روزافزون صنعت کریپتوکارنسی، علاقه‌مندان بی‌شماری پیدا کرده‌اند. اما در این بین اکثریت قریب به اتفاق این سایت‌ها و اپلیکیشن‌ها بر مبنای معاملات ساده شکل گرفته‌اند و بسیار کم می‌توان مواردی را یافت که ویژگی‌های اختصاصی و رابط کاربری منحصر‌به‌ فردی را تولید کنند.
                        </p>
                        <p className=' text-justify leading-10'>
                        •
                        بیت آسیا مجموعه‌ای از مهندسین با تجربه در حوزه‌ی مالی، سرمایه گذاری و تکنولوژی است که در تلاشند تا محیطی بروز و کارآمد ، متناسب با پلتفرم بورس ایران در اختیار کاربران خود قرار دهند تا کاربران ، با هر سطح دانش و تجربه ای بتوانند در زمینه‌ی سرمایه‌گذاری ، حفظ و افزایش ارزش مالی خود فعالیت کنند.
                        </p>
                        <p className=' text-justify leading-10'>
                        •
                        پلتفرم معاملاتی بیت آسیا امکان مبادله ارزهای دیجیتال در بازار های تومان و تتر را در لحظه و با نرخ واقعی بصورت مستقیم و بدون واسطه برای کاربران میسر میکند . کارمزد پایین ، قیمت واقعی و امکان خرید سریع از ویژگیهای این بازار می باشد.
                        </p>
                        <p className=' text-justify leading-10'>
                        • با بیت آسیا در لحظه اقدام به خرید بیت کوین و ارزهای دیجیتال نمائید .                        </p>
                    </div>
                    <div className='flex-1 flex justify-center'>
                        <Image className='mx-auto' src={AboutImg} alt='' />

                    </div>
                </div>
            </div>
            <div className='bg-blue-600 flex flex-col lg:flex-row items-center px-20 mt-10 lg:mt-20'>
                <Image width={350} height={350} src={Guide} alt='' />
                <div className='flex items-center flex-col  flex-1'>
                    <div className='flex flex-col lg:flex-row items-center gap-6'>
                        <h6 className='text-white font-extrabold whitespace-nowrap text-xl lg:text-2xl'>به راهنمایی بیشتری نیاز دارید؟   </h6>
                        <Link href={"/contact-us"} className='block bg-white rounded-xl p-2 px-5'>تماس با ما</Link>
                    </div>
                    <p className='pt-5 whitespace-nowrap lg:-pr-5 text-white'>تیم پشتیبانی ما آماده پاسخگویی به سوالات شماست.</p>
                </div>
            </div>
        </div>
    )
}

export default Page