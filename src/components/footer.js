import React from "react";


function Footer() {
  return (
    <div className="lg:px-16 justify-center py-20 flex flex-wrap gap-x-2 gap-y-8 lg:justify-between bg-black text-white">
      <div className="flex gap-2">
        <img
          className="w-20 h-28 md:w-28 md:h-36 lg:w-32 lg:h-44 hover:opacity-90 transition-all object-cover py-2 lg:py-4 bg-white rounded-xl cursor-pointer"
          src='./images/logo.png'
          alt="مجوز رسانه"
        />
        <img
          className="w-20 h-28 md:w-28 md:h-36 lg:w-32 lg:h-44 hover:opacity-90 transition-all object-cover py-2 lg:py-4 bg-white rounded-xl cursor-pointer"
          src='./images/logo (2).png'
          alt="مجوز ای نماد"
        />
        <img
          className="w-20 h-28 md:w-28 md:h-36 lg:w-32 lg:h-44 hover:opacity-90 transition-all object-cover py-2 lg:py-4 bg-white rounded-xl cursor-pointer"
          src='./images/etehadiye.png'
          alt="مجوز اتهادیه"
        />
      </div>

      <div class="text-center justify-center md:text-right flex flex-wrap gap-8">
        <div class="block">
          <h5 class="text-lg font-medium mb-4">کسب وکارها</h5>
          <span class="text-sm hover:text-orange block mb-4 cursor-pointer">
            پنل سازمان تپسی
          </span>
          <span class="text-sm hover:text-orange block mb-4 cursor-pointer">
            خرید کد اعتبار و تخفیف
          </span>
          <span class="text-sm hover:text-orange block mb-4 cursor-pointer">
            API دریافت
          </span>
        </div>

        <div class="block">
          <h5 class="text-lg font-medium mb-4">رانندگان</h5>
          <span class="text-sm hover:text-orange block mb-4 cursor-pointer">
            دانلود اپ سفیر
          </span>
          <span class="text-sm hover:text-orange block mb-4 cursor-pointer">
            ثبت نام راننگان اینترنتی
          </span>
          <span class="text-sm hover:text-orange block mb-4 cursor-pointer">
            پرسش های متداول سفیران
          </span>
          <span class="text-sm hover:text-orange block mb-4 cursor-pointer">
            شرایط و قوانین سفیران
          </span>
          <span class="text-sm hover:text-orange block mb-4 cursor-pointer">
            باشگاه سفیران
          </span>
        </div>

        <div class="block">
          <h5 class="text-lg font-medium mb-4">مسافران</h5>
          <span class="text-sm hover:text-orange block mb-4 cursor-pointer">
            دانلود اپ مسافر
          </span>
          <span class="text-sm hover:text-orange block mb-4 cursor-pointer">
            نسخه وب تپسی
          </span>
          <span class="text-sm hover:text-orange block mb-4 cursor-pointer">
            پرسش های متداول مسافران
          </span>
          <span class="text-sm hover:text-orange block mb-4 cursor-pointer">
            شرایط و قوانین مسافرن
          </span>
          <span class="text-sm hover:text-orange block mb-4 cursor-pointer">
            باشگاه مشتریان
          </span>
        </div>

        <div class="block">
          <h5 class="text-lg font-medium mb-4">تپسی</h5>
          <span class="text-sm hover:text-orange block mb-4 cursor-pointer">
            وبلاگ تپسی
          </span>
          <span class="text-sm hover:text-orange block mb-4 cursor-pointer">
            فرصت شغلی
          </span>
          <span class="text-sm hover:text-orange block mb-4 cursor-pointer">
            تماس با ما
          </span>
          <span class="text-sm hover:text-orange block mb-4 cursor-pointer">
            لوگو و هویت سازمانی
          </span>
          <span class="text-sm hover:text-orange block mb-4 cursor-pointer">
            معرفی راننده به تپسی
          </span>
        </div>
      </div>

      <div class="block mx-auto">
            <div class="block text-right">
                <span><img src='./images/tapsi-logo-white.svg' alt="تپسی" class="w-32 h-8 mx-auto cursor-pointer"/></span>
                <p class="mt-4 text-xs">اپلیکیشن درخواست خودرو و پیک</p>
                <p class="mt-2 text-xs text-gray-400">این سایت کپی شده توسط میلاد استادی است</p>
            </div>
        
            <div class="mt-5 block">
                <span class="text-sm text-center text-white font-medium md:text-right block">تپسی در شکبه های اجتماعی</span>
        
                <div class="flex gap-2 mt-4 lg:justify-end">
                    <span className="cursor-pointer"><img src='./images/icons8-facebook-f-48.png' alt="تپسی  شبکه های اچتماعی" class="w-7 h-7 hover:opacity-50 transition"/></span>
                    <span className="cursor-pointer"><img src='./images/icons8-instagram-50.png' alt="تپسی  شبکه های اچتماعی" class="w-7 h-7 hover:opacity-50 transition"/></span>
                    <span className="cursor-pointer"><img src='./images/icons8-linkedin-2-30.png' alt="تپسی  شبکه های اچتماعی" class="w-7 h-7 hover:opacity-50 transition"/></span>
                    <span className="cursor-pointer"><img src='./images/icons8-telegram-app-50.png' alt="تپسی  شبکه های اچتماعی" class="w-7 h-7 hover:opacity-50 transition"/></span>
                    <span className="cursor-pointer"><img src='./images/icons8-twitter-50.png' alt="تپسی  شبکه های اچتماعی" class="w-7 h-7 hover:opacity-50 transition"/></span>
                </div>                
        
            </div>
        
        </div>
    </div>
  );
}

export default React.memo(Footer);
