import React from "react";
import Countus from "@/../public/images/brand communication-bro.svg";
import Image from "next/image";
import Input from "@/components/common/Input";
import Textare from "@/components/common/Textare";
import Footer from "@/components/landing/Footer";
const Page = () => {
    return (
        <div className="layout mt-10">
            {/* <Image src={Countus} alt="" className="m-auto w-1/3" /> */}
            <h1 className="text-xl font-extrabold text-center mt-10">
                با ما در تماس باشید
            </h1>
            {/* <form className='w-[95%] lg:w-[500px] mx-auto flex flex-col gap-2 lg:gap-4 mt-10'>
                <Input required title='نام و نام خانوادگی'/>
                <Input required title='ایمیل'/>
                <Textare required title='پیام'/>
                <div className='flex justify-between mt-10 items-center'>
                    <button className='bg-[#407bff] py-2 rounded-lg px-8 text-[14px] text-white'>ارسال</button>
                    <button className='bg-[#407bff] py-2 rounded-lg px-8 text-[14px] text-white'>پیام به تلگرام</button>
                </div>
            </form> */}

            <div className="w-full mx-auto py-5 max-w-[1300px]">
                <div className="flex flex-wrap items-start justify-between mt-3 py-5">
                    <div className="lg:w-1/4 md:w-1/2 w-1/2 text-center">
                        <div>
                            <a
                                href="tel:02148000969"
                                className="text-light-1  text-[14px]"
                            >
                                021-48000969
                            </a>
                            <p className="mt-3 font-extrabold text-[16px]">info@bitasia.ir</p>
                        </div>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-1/2 text-center">
                        <div>
                            <p className="text-light-1 text-[14px]">ساعات کاری هفته </p>
                            <p className="mt-3 font-extrabold text-[16px]">
                                در تمامی روزهای سال به غیر از <br /> ایام تعطیل رسمی
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-1/2 text-center">
                        <div>
                            <p className="text-light-1 text-[14px]">آدرس  </p>
                            <p className="mt-3 font-extrabold text-[16px]">
                            تهران ، قیطریه ،قلندری جنوبی
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-1/2 text-center">
                        <div>
                            <a
                                href="tel:09129311631"
                                className="text-light-1  text-[14px]"
                            >
                                09309727254
                            </a>
                            <p className="mt-3 font-extrabold text-[16px]">پشتیبانی واتساپ</p>
                        </div>
                    </div>
                    <div className="w-full m-auto py-10 mt-10">
                        <iframe
                            title="Quala on map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d700.8038085101743!2d51.34529892182109!3d35.733539309092016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dfd898dea7aed%3A0x257e2f49a2e078b8!2sAlvand%20Tower!5e0!3m2!1sen!2s!4v1684153716900!5m2!1sen!2s"
                            width="100%"
                            height="450"
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
