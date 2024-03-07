import Image from 'next/image'
import React from 'react'
import Ad from "@/../public/images/bit-1.svg"
import Link from 'next/link'
import Shape from "@/../public/images/shape.svg"
const Introduction = () => {
    return (
        <div className='bg-dark_blue'>
            <div className='flex bg-dark_blue px-10 items-center pt-20'>
                <div className='w-1/2'>
                    <h1 className='font-extrabold text-3xl text-green-500'>بازار معاملاتی ارز دیجیتال بیت آسیا</h1>
                    <p className='font-light text-justify pt-7 text-white text-md'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده.</p>
                    <Link className='block border text-[14px] text-green-500 border-green-500  font-bold w-fit rounded-lg p-2 mt-6' href={"#"}>ورود به پنل کاربری</Link>
                </div>
                <div className="relative w-[450px] h-[450px] mx-auto ">
                    <Image fill src={Ad} alt='' />
                </div>
            </div>
            <Image className='w-full -mt-20 object-cover' src={Shape} alt=''/>
        </div>
    )
}

export default Introduction