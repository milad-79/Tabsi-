import React from "react";

function Countris() {
    return ( 
        <div class="bg-nav-bg px-16 py-6 hidden bg-iran-count font-vazmir md:block relative mt-36">
            <h1 class="text-xl font-medium text-right lg:text-3xl lg:font-semibold">تپسی در ایران</h1>
            <img src='./images/Iran_map_vector.svg.png' alt="" class="absolute w-92 h-full top-0 left-15%  opacity-20"/>
            <div class="grid mt-8 gap-y-8 px-16 justify-center md:grid-cols-5 lg:grid-cols-8">
                <div class="block md:text-sm lg:text-base">
                    <p class="text-lg">تهران</p>
                    <p class="text-lg">Thran</p>
                </div>
    
                <div class="block md:text-sm lg:text-base">
                    <p class="text-lg">کرج</p>
                    <p class="text-lg">Karaj</p>
                </div>
    
                <div class="block md:text-sm lg:text-base">
                    <p class="text-lg">مشهد</p>
                    <p class="text-lg">Mashhad</p>
                </div>
    
                <div class="block md:text-sm lg:text-base">
                    <p class="text-lg">اصفهان</p>
                    <p class="text-lg">Isfahan</p>
                </div>
    
                <div class="block md:text-sm lg:text-base">
                    <p class="text-lg">شیراز</p>
                    <p class="text-lg">Shiraz</p>
                </div>
    
                <div class="block md:text-sm lg:text-base">
                    <p class="text-lg">ارومیه</p>
                    <p class="text-lg">Urmia</p>
                </div>
    
                <div class="block md:text-sm lg:text-base">
                    <p class="text-lg">لاهیجان</p>
                    <p class="text-lg">Lahijan</p>
                </div>
    
                <div class="block md:text-sm lg:text-base">
                    <p class="text-lg">رشت</p>
                    <p class="text-lg">Rasht</p>
                </div>
    
                <div class="block md:text-sm lg:text-base">
                    <p class="text-lg">انزلی</p>
                    <p class="text-lg">َAnzali</p>
                </div>
    
                <div class="block md:text-sm lg:text-base">
                    <p class="text-lg">تبریز</p>
                    <p class="text-lg">Tabriz</p>
                </div>
    
                <div class="block md:text-sm lg:text-base">
                    <p class="text-lg">ساری</p>
                    <p class="text-lg">Sari</p>
                </div>
    
                <div class="block md:text-sm lg:text-base">
                    <p class="text-lg">یزد</p>
                    <p class="text-lg">Yazd</p>
                </div>
    
                <div class="block md:text-sm lg:text-base">
                    <p class="text-lg">کرمان</p>
                    <p class="text-lg">Kerman</p>
                </div>
    
                <div class="block md:text-sm lg:text-base">
                    <p class="text-lg">قم</p>
                    <p class="text-lg">Qom</p>
                </div>
    
                <div class="block md:text-sm lg:text-base">
                    <p class="text-lg">اهواز</p>
                    <p class="text-lg">Ahvaz</p>
                </div>
    
                <div class="block md:text-sm lg:text-base">
                    <p class="text-lg">بابل</p>
                    <p class="text-lg">Babol</p>
                </div>
    
                <div class="block md:text-sm lg:text-base">
                    <p class="text-lg">قايِم شهر</p>
                    <p class="text-lg">Qeam Shahr</p>
                </div>
    
                <div class="block md:text-sm lg:text-base">
                    <p class="text-lg">آمل</p>
                    <p class="text-lg">Amol</p>
                </div>
            </div>
        </div>
     );
}

export default React.memo(Countris) ;