import React from "react";

function Driver() {
    return ( 
        // Information on hiring drivers
        <div className="flex flex-wrap justify-between px-4 sm:px-16 md:px-26 mt-36">
            <div  className="overflow-hidden rounded-xl w-full md:w-5/12">
                <img className="w-full" src='./images/driver.webp'/>
            </div>

            <div className="w-full md:w-6/12 text-right">
                <div className="mt-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl md:mt-0">
                    <h1>مزایای تپسی برای رانندگان تاکسی اینترنتی</h1>
                </div>

                <div className=" text-text-color tracking-wider text-sm leading-loose mt-12 md:text-base">
                    <p>رانندگان (سفیران) به‌عنوان همکاران تپسی، جایگاه ویژه‌ای برای شرکت دارند. به همین‌دلیل مزایای مختلفی برای آنها در نظر گرفته شده است.</p>
                </div>

                <div className="text-text-color tracking-wider leading-loose mt-16 md:text-xl font-medium">
                    <h4>کسب درآمد روزانه، پایدار و بدون محدودیت</h4>
                </div>

                <div className="text-text-color tracking-wider leading-loose text-sm mt-7 md:text-base">
                    <p>امکان تسویه‌ی اعتبار در هر ساعت از شبانه‌روز</p>
                    <p className="my-2">طرح‌های تشویقی، ماموریت‌ها‌، پاداش و اعطای وام‌های قرض‌الحسنه به‌طور دوره‌ای</p>
                    <p>نمایش مکان‌های پردرخواست در اپلیکیشن و دریافت سفرهای طلایی</p>
                </div>

                <div className="text-text-color tracking-wider leading-loose mt-20 md:text-xl font-medium">
                    <h4>تضمین امنیت و پشتیبانی رانندگان</h4>
                </div>

                <div className="text-text-color tracking-wider leading-loose text-sm mt-7 md:text-base">
                    <p>پشتیبانی ۲۴ ساعته</p>
                    <p className="mt-1">امکانات امنیت سفر شامل تماس اضطراری با واحد امنیت و پشتیبانی ۲۴ ساعته تیم امنیت</p>
                </div>

                <div className="text-text-color tracking-wider leading-loose mt-20 md:text-xl font-medium">
                    <h4>واریز سهمیه بنزین ویژه رانندگان تپسی</h4>
                </div>

                <div className="text-text-color tracking-wider leading-loose text-sm mt-7 md:text-base">
                    <p>نمایش میزان پیمایش ماهانه درون اپلیکیشن</p>
                    <p className="mt-1">محاسبه‌ی مسافت طی شده تا مسافر در پیمایش</p>
                </div>

                <div className="text-text-color tracking-wider leading-loose mt-20 md:text-xl font-medium">
                    <h4> استفاده از مزایای <span className="text-indigo-700 cursor-pointer">باشگاه رانندگان تپسی</span></h4>
                </div>

                <div className="text-text-color tracking-wider leading-loose text-sm mt-7 md:text-base">
                    <p>...تخفیف روی خدمات خودرو مانند بیمه، سرویس‌های دوره‌ای، خرید لاستیک و</p>
                    <p className="my-2"> تخفیف روی خدمات رفاهی مانند وام قرض‌الحسنه، خدمات درمانی، خرید اقساطی و</p>
                    <p>....</p>
                </div>
                <div className="flex flex-wrap sm:gap-2 justify-center md:gap-4 md:justify-end mt-6">
                    <button className="w-52 h-14 bg-indigo-700 focus:bg-indigo-600 text-white rounded-lg mb-2 md:mb-0">ثبت نام راننده تاکسی آنلاین</button>
                    <button className="h-14 w-52 bg-indigo-700 focus:bg-indigo-600 text-white rounded-lg">دانلود برنامه تبسی راننده</button>
                </div>
            </div>
        </div>
     );
}

export default React.memo(Driver);