import React from "react";


function SrevicesIcon(props) {

    return ( 
        <React.Fragment>
        <div className="flex justify-between  overflow-x-auto flex-row-reverse gap-5 my-12" >
            <button className="w-95px h-85px text-center opacity-50 focus:opacity-100 block"
             onClick={()=>{
                props.click('tapsiClassic')
            }}>
                <img className="w-95px h-12" src='./images/cc-classic.png'/>
                <p className="w-95px text-icon-service-text text-sm ">
                    تپسی کلاسیک
                </p>
            </button>

            <button className="w-95px h-85px text-center opacity-50 focus:opacity-100 block"
            onClick={()=>{
                props.click('tapsiMotoPike')
            }}>
                <img className="w-95px h-12" src='./images/cc-motopeyk.png'/>
                <p className="w-95px text-icon-service-text text-sm">
                    موتوپیک
                </p>
            </button>

            <button className="w-95px h-85px text-center opacity-50 focus:opacity-100 block"
            onClick={()=>{
                props.click('tapsiAutoPike')
            }}>
                <img className="w-95px h-12" src='./images/cc-autopeyk.png'/>
                <p className="w-95px text-icon-service-text text-sm">
                    اتوپیک
                </p>
            </button>

            <button className="w-95px h-85px text-center opacity-50 focus:opacity-100 block"
            onClick={()=>{
                props.click('tapsipluse')
            }}>
                <img className="w-95px h-12" src='./images/cc-plus.png'/>
                <p className="w-95px text-icon-service-text text-sm">
                    تپسی پلاس
                </p>
            </button>

            <button className="w-95px h-85px text-center opacity-50 focus:opacity-100 block"
            onClick={()=>{
                props.click('tapsitel')
            }}>
                <img className="w-95px h-12" src='./images/cc-tel.png'/>
                <p className="w-95px text-icon-service-text text-sm">
                    تپسی تلفنی
                </p>
            </button>

            <button className="w-95px h-85px text-center opacity-50 focus:opacity-100 block"
            onClick={()=>{
                props.click('tapsiHamyar')
            }}>
                <img className="w-95px h-12" src='./images/cc-hamyar.png'/>
                <p className="w-95px text-icon-service-text text-sm">
                    همیار
                </p>
            </button>

            <button className="w-95px h-85px text-center opacity-50 focus:opacity-100 block"
            onClick={()=>{
                props.click('tapsiHamKhat')
            }}>
                <img className="w-95px h-12" src='./images/cc-hamkhat.png'/>
                <p className="w-95px text-icon-service-text text-sm">
                    هم‌خط
                </p>
            </button>

            <button className="w-95px h-85px text-center opacity-50 focus:opacity-100 block"
            onClick={()=>{
                props.click('tapsiTaxi')
            }}>    
                <img className="w-95px h-12" src='./images/cc-taxi.png'/>
                <p className="w-95px text-icon-service-text text-sm">
                    تاکسی
                </p>
            </button>

            <button className="w-95px h-85px text-center opacity-50 focus:opacity-100 block"
            onClick={()=>{
                props.click('tapsiLine')
            }}>    
                <img className="w-95px h-12" src='./images/cc-line.png' alt=""/>
                <p className="w-95px text-icon-service-text text-sm">
                    تپسی لاین
                </p>
            </button>
        </div>
    </React.Fragment>
     );
}

export default React.memo(SrevicesIcon);