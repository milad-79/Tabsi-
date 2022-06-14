import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function SrivicesTapsi() {
    return ( 
        <div className="px-4 sm:px-16 md:px-32 mt-36">
            <div className="flex items-center justify-center md:justify-between flex-wrap">
                <div className="w-10/12 justify-center md:w-5/12">
                    <img className="w-full" src='./images/i-mac.webp' alt=""/>
                </div>
                <div className="w-10/12 mt-16 md:mt-0 md:w-5/12 text-right">
                    <h1 className="text-2xl font-semibold">
                        خدمات تپسی ویژه کسب‌وکارها      
                    </h1>

                    <p className="tracking-wider leading-loose text-text-color mt-4 mb-4">
                        پنل سازمانی تپسی، یک سامانه تحت وب است که به سادگی امکان درخواست هم‌زمان تعداد نامحدودی خودرو و پیک را برای کسب‌وکارها و سازمان‌ها فراهم می‌کند. و با استفاده از آن می‌توانید ماموریت های درون‌شهری و ارسال کالاهای خود را به سادگی مدیریت کنید.
                    </p>

                    <div className="flex items-center justify-center gap-5">
                    <span  className="text-orange flex items-center mt-4">
                        <FontAwesomeIcon icon={faChevronLeft} className="mr-2"/>
                        اطلاعات بیشتر سرویس سازمانی
                    </span>

                    <button className="bg-orange text-white mt-5 px-6 py-5 rounded-lg">
                        ورود و ثبت نام پنل سازمانی
                    </button>
                    </div>
                </div>
            </div>


            <div className="flex justify-center mt-20 md:mt-32 items-center md:justify-between flex-wrap">
                <div className="w-10/12  md:w-5/12 text-right">
                    <h1 className="text-2xl font-semibold">
                        خرید کد اعتبار تپسی           
                    </h1>

                    <p className="tracking-wider leading-loose text-text-color mt-4">
                        کاربران، کسب‌وکارها و سازمان‌ها می‌توانند به تعداد و مبلغ مورد نظرشان، کد اعتبار یا کد تخفیف تپسی تهیه کرده، برای خود، پرسنل و یا مشتریانشان استفاده کنند و از تخفیف‌های ویژه تپسی نیز بهره‌مند شوند.
                        این کدها امکان سفارشی‌سازی بر اساس مبدا، مقصد، زمان، درصد و مبلغ را دارند.
                    </p>

                    <button className="bg-orange text-white mt-8 px-6 py-5 rounded-lg">
                        خرید کد اعتبار وتخفیف
                    </button>
                </div>
                <div className="w-10/12 mt-16 md:mt-0 justify-center md:w-5/12">
                    <img className="w-full" src='./images/macbook.webp' alt=""/>
                </div>
            </div>
        </div>
     );
}

export default React.memo(SrivicesTapsi);