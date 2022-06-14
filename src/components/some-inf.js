import React from "react";

const SomeInf = () =>{
    return(
        <div className="mt-32 h-400px lg:h-60 relative font-vazmir">
            <img className="w-full h-full object-cover" src='./images/Panorama_of_Tabriz.jpg'/>
            <div className="w-full h-full top-0 left-0 absolute bg-indigo-700 opacity-60 "></div>
            <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full
             grid gap-10 grid-cols-1 flex-col-reverse lg:px-36 lg:justify-between lg:flex lg:gap-0 lg:items-center lg:flex-row-reverse">

                <div className="block text-white text-center w-full lg:w-1/4 show mx-auto h-full ">
                    <p className="text-xl font-medium mb-4">بسته امنیت سفر</p>
                    <div className="hidden">
                        <p className="">امکانات ویژه امنیت سفر، شامل اشتراک سفر و پشتیبانی ۲۴ ساعته تیم متخصصین امنیت تپسی</p>
                    </div>
                </div>

                <div className="block text-white text-center w-full lg:w-1/4 show mx-auto h-full">
                    <p className="text-xl font-medium mb-4">درخواست تلفنی</p>
                    <div className="hidden">
                        <p className="">امکان درخواست خودرو بدون نیاز به اینترنت و اپلیکیشن، از طریق تماس با شماره ۱۶۳۰</p>
                    </div>
                </div>

                <div className="block text-white text-center w-full lg:w-1/4 show mx-auto h-full">
                    <p className="text-xl font-medium mb-4">درخواست تلفنی</p>
                    <div className="hidden">
                        <p className="">امکان درخواست خودرو بدون نیاز به اینترنت و اپلیکیشن، از طریق تماس با شماره ۱۶۳۰</p>
                    </div>
                </div>

                <div className="block text-white text-center w-full lg:w-1/4 show mx-auto h-full">
                    <p className="text-xl font-medium mb-4">امکانات هوشمند</p>
                    <div className="hidden">
                        <p className="">سهولت استفاده از اپلیکیشن با پیشنهاد مبدا و مقصد سفر، مقاصد منتخب و پیشنهادهای ویژه شما</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(SomeInf);