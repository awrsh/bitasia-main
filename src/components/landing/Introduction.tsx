import Image from 'next/image'
import React from 'react'
import Ad from "@/../public/images/Finance-pana.png"
import Link from 'next/link'
import Shape from "@/../public/images/shape.svg"
const Introduction = () => {
    return (
        <div className='bg-white dark:bg-dark_blue'>
            <div className='flex flex-col lg:flex-row bg-white dark:bg-dark_blue lg:px-10 items-center pt-20'>
                <div className='px-5 lg:px-0 lg:w-1/2'>
                    <h1 className='font-extrabold text-3xl text-[#407BFF]'>بازار معاملاتی ارز دیجیتال بیت آسیا</h1>
                    <p className='font-light text-justify pt-7 text-mode text-md'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده.</p>
                    <a className='block border text-[14px] text-[#407BFF] border-[#407bff]  font-bold w-fit rounded-lg p-2 mt-6' href="https://dashboard.bitasia.ir/">ورود به پنل کاربری</a>
                </div>
                <div className="relative w-[250px] mt-10 lg:mt-0 h-[250px] lg:w-[450px] lg:h-[450px] mx-auto ">
                    <Image fill src={Ad} alt='' />
                </div>
            </div>
            <Image className='w-full hidden  dark:lg:block -mt-20 object-cover' src={Shape} alt=''/>
        </div>
    )
}

export default Introduction