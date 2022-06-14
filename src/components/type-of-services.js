import React ,{useState} from "react";
import SrevicesIcon from "./services-icons";
import { service } from "../inf";


function Srevices() {

    const [show ,setShow] = useState(
        {
            id : 'tapsiClassic',
            name : 'تپسی کلاسیک',
            dec : 'با سرویس کلاسیک تپسی، یک خودروی اختصاصی برای رسیدن به مقصدتان دارید. تپسی کلاسیک، راهی سریع و آسان برای سفرهای درون‌شهری در هر ساعتی از روز است. در این سرویس، شما امکان تعیین دو یا چند مقصد و همچنین توقف در مسیر را دارید.', 
            imgUrl : './images/illus-classic.webp'
        }
    )

    // در صورت کلید بر ایکون و برابر بودن  ایدی اطلاعات نمایش داده میشود
    const click=(id)=>{
        service.map((item)=>{
            if(item.id === id){
               setShow(item)
            }
        })
    }

    return ( 
    <div className="px-4 mt-40 sm:px-20 md:px-36 sm:mt-52">
        <h1 className="text-3xl text-right font-medium">
            سرویس‌های تپسی
        </h1>
        <SrevicesIcon click={click}/>
        <div className="flex justify-center gap-3 border-b border-gray-200 pb-20">
           <div className="hidden w-5/12 lg:block">
                <img className="w-full h-full" src={show.imgUrl} alt=""/>
           </div>
           <div className="w-full text-right lg:w-5/12">
                <h1 className="text-2xl font-medium">
                    {
                        show.name
                    }
                </h1>

                <p className="tracking-wider leading-loose mt-4 text-text-color">
                    {
                        show.dec
                    }
                </p>
           </div>
        </div>
    </div>
    );
}

export default React.memo(Srevices);