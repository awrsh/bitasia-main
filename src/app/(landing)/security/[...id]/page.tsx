import React from 'react'

const Page = () => {
    return (
        <div className='w-[80%] mt-10 mx-auto'>
            <h1 className='border-b text-2xl font-bold dark:border-gray-100 pb-6'>چگونه امنیت حساب کاربری خود را افزایش دهم؟</h1>
            <p className='pt-12 leading-10'>امنیت حساب کاربری و دارایی کاربران، مهم‌ترین اولویت بیت‌آسیا است.
                تیم بیت‌آسیا تمامی تدابیر امنیتی برای ایجاد بستر غیرقابل هک را اندیشیده و محصولی امن به شما کاربران عزیز ارائه کرده است. اما قسمتی از امنیت هر پلتفرمی، به نحوه استفاده کاربر از آن و ملاحظات امنیتی وی برمی‌گردد.
                درواقع گام اول امنیت حساب کاربری، رعایت نکات و موارد امنیتی توسط خود کاربر است. به‌همین دلیل، بیت‌آسیا سعی دارد با آموزش نکات امنیتی زندگی دیجیتال، علاوه‌ بر آگاه‌سازی کاربران خود، به امن کردن حساب کاربری آن‌ها نیز کمک کند.</p>
            <div className='mt-20'>
                <p>در همین راستا، توجه به نکات زیر می‌تواند تاثیر قابل ملاحظه‌ای در امنیت حساب کاربری شما داشته باشد:</p>
                <ul className='mt-10 space-y-6'>
                    <li className='relative pr-7 before:right-0 before:top-1 before:absolute before:w-3 before:h-3 before:bg-green-500 before:rounded-full '>پیشنهاد می‌شود حساب کاربری خود را خودتان بسازید و از آن استفاده کنید؛ درواقع کسی به نمایندگی از شما حسابتان را مدیریت نکند.</li>
                    <li className='relative pr-7 before:right-0 before:top-1 before:absolute before:w-3 before:h-3 before:bg-green-500 before:rounded-full '>رمزی انتخاب کنید که پی بردن به آن سخت باشد و تا جای ممکن، از رمزی متفاوت با رمزهای دیگرتان استفاده کنید.</li>
                    <li className='relative pr-7 before:right-0 before:top-1 before:absolute before:w-3 before:h-3 before:bg-green-500 before:rounded-full '>سعی کنید رمزتان حداقل ۱۵ کاراکتر داشته باشد و از ترکیب اعداد، حروف و کاراکترهای مختلف تشکیل شود.</li>
                    <li className='relative pr-7 before:right-0 before:top-1 before:absolute before:w-3 before:h-3 before:bg-green-500 before:rounded-full text-green-500' >ورود دو مرحله‌ای (2AF) را برای حساب کاربری خود فعال کنید.</li>
                    <li className='relative pr-7 before:right-0 before:top-1 before:absolute before:w-3 before:h-3 before:bg-green-500 before:rounded-full '>در صورت ورود به بیت‌آسیا از طریق مرورگر، دقت کنید که در نوار آدرس آن، آدرس‌های رسمی بیت‌آسیا یعنی bitpin.ir و bitpin.org درج شده باشد.</li>
                    <li className='relative pr-7 before:right-0 before:top-1 before:absolute before:w-3 before:h-3 before:bg-green-500 before:rounded-full '>برای دانلود اپلیکیشن بیت‌آسیا از منابع رسمی معرفی شده در این راهنما استفاده کنید.</li>
                </ul>
            </div>
        </div>
    )
}

export default Page