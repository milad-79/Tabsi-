import React from "react";



function NewNews() {
    return ( 
        <div className="flex flex-wrap justify-between px-4 sm:px-16 md:px-26 mt-36">
            <div className="w-full md:w-31% mt-3 md:mt-0 rounded-xl hover:shadow-md hover:scale-105 transition-all text-right p-2">
                <img className="w-full rounded-xl" src='./images/baner-blog-alodegi-hava-tehran-copy.jpg' alt=""/>
                <p className="text-text-color text-lg mt-3">دلایل آلودگی هوای تهران وراهکارهای آن</p>
                <p className="mt-4 tracking-wider leading-loose">با توجه به روند افزایش جمعیت و صنعتی شدن بسیاری از شهرها، آلودگی هوا به یکی از بزرگ‌ترین معضلات زیست‌ محیطی تبدیل شده است</p>
            </div>

            <div className="w-full md:w-31% mt-3 md:mt-0 rounded-xl hover:shadow-md hover:scale-105 transition-all text-right p-2">
                <img className="w-full rounded-xl" src='./images/baner-blog-taxsi-1.jpg' alt=""/>
                <p className="text-text-color text-lg mt-3">خطوط تاکسی تهران بشناسید و بی دغدغه سفر کنید</p>
                <p className="mt-4 tracking-wider leading-loose">در حالی که جمعین شهر تهران روز به روز در حال افزایش است، وسایل حمل و نقل جمعی مانند خطوط تاکسی، اتوبوس و مترو نیز به دنبال آن افزایش می‌یابند تا پاسخگوی نیاز تمامی ساکنان پایتخت باشند</p>
            </div>

            <div className="w-full md:w-31% mt-3 md:mt-0 rounded-xl hover:shadow-md hover:scale-105 transition-all text-right p-2">
                <img className="w-full rounded-xl" src='./images/kharid-khodro-karkarde2-copy-1.jpg' alt=""/>
                <p className="text-text-color text-lg mt-3">نکاتی که هنگام خرید خودروکار کرده باید  بدانید</p>
                <p className="mt-4 tracking-wider leading-loose">خرید خودرو احتمالا یکی از دستاوردهایی است که هر فرد تمایل دارد به آن برسد و اکثر افراد روزی را که موفق به خرید خودرو شدند یک پیروزی برای خود به حساب می‌آورند</p>
            </div>
        </div>
     );
}

export default React.memo(NewNews);