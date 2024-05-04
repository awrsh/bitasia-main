import React from "react";
import Countus from "@/../public/images/brand communication-bro.svg";
import Image from "next/image";
import Input from "@/components/common/Input";
import Textare from "@/components/common/Textare";
import Footer from "@/components/landing/Footer";
const Page = () => {
    return (
        <div className="layout mt-10">
            <h1 className="text-xl font-extrabold text-center my-16">
                با ما در تماس باشید
            </h1>


            <div className="w-full mx-auto py-5 max-w-[1300px]">
                <div className="flex  lg:items-start items-center lg:justify-between justify-center mt-3 py-5">
                    <div className="w-full">
                        <div className="flex items-start flex-col lg:flex-row">
                            <div className="w-full     text-center">
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
                            <div className="w-full     text-center">
                                <div>
                                    <p className="text-light-1 text-[14px]">ساعات کاری هفته </p>
                                    <p className="mt-3 font-extrabold text-[16px]">
                                        در تمامی روزهای سال به غیر از <br /> ایام تعطیل رسمی
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start flex-col lg:flex-row pt-8">
                            <div className="w-full     text-center">
                                <div>
                                    <p className="text-light-1 text-[14px]">آدرس  </p>
                                    <p className="mt-3 font-extrabold text-[16px]">
                                        تهران ، قیطریه ،قلندری جنوبی 
                                        <br />
                                    کوچه شیرین پلاک ۲ - واحد ۲
                                    </p>
                                </div>
                            </div>
                            <div className="w-full  text-center">
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
                        </div>

                        <form className='w-[95%] lg:w-[500px] mx-auto flex flex-col gap-2 lg:gap-4 mt-[50px]'>
                            <Input required title='نام و نام خانوادگی' />
                            <Input required title='ایمیل' />
                            <Textare required title='پیام' />
                            <div className='flex justify-between mt-10 items-center'>
                                <button className='bg-[#407bff] py-2 rounded-lg px-8 text-[14px] text-white'>ارسال</button>
                                <button className='bg-[#407bff] py-2 rounded-lg px-8 text-[14px] text-white'>پیام به تلگرام</button>
                            </div>
                        </form>
                    </div>

                    <Image src={Countus} alt="" className="m-auto w-1/2 hidden lg:block" />

                </div>
            </div>
        </div>
    );
};

export default Page;
