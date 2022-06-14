import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const arrowDown = <FontAwesomeIcon icon={faArrowDown} />;

function DownApp() {
  return (
    <div className="h-478px md:h-563px relative">
      {/* body of download app */}
      <div className="bg-back-mobile w-full h-478px bg-cover md:bg-back md:h-511px flex justify-center lg:justify-between items-center">
        <div className="w-511px h-783px xl:ml-36 -mb-96 hidden lg:block">
          <img className="w-full h-full" src='./images/mockup-phone.webp' alt="تپسی" />
        </div>
    
        {/* body of download btn */}
        <div className="from w-270px h-388px py-2 px-3 bg-back-mobile rounded-2xl lg:mr-8 md:w-528px md:h-300px md:p-25px xl:mr-28">
          <h2 className="text-white text-3xl font-bold text-right md:text-4xl">
            تپسی
          </h2>
          <h4 className="text-white text-base text-right mt-6 font-medium md:text-lg">
            اپلیکیشن درخواست خودرو و پیک
          </h4>

          <div className="mt-8 md:block md:mt-12 ">
            <div className="md:flex md:gap-2">
              <span
                className="block cursor-pointer w-full text-center h-12 my-3 bg-white text-black text font-medium rounded-lg pt-2 px-5 md:my-0 "
              >
                <div className="flex items-center justify-between">
                  وب اپلیکیشن مسافران
                  {arrowDown}
                </div>
              </span>
              <span
                className="block cursor-pointer w-full text-center h-12 my-3 bg-white text-black text font-medium rounded-lg pt-2 px-5 md:my-0 "
              >
                <div className="flex items-center justify-between ">
                  دانلود اپلیکیشن مسافران
                  <img className=" w-5 h-5" src='./images/pwa-logo-2.png' />
                </div>
              </span>
            </div>
            <div className="md:flex md:gap-2 mt-3">
              <span
                className="block cursor-pointer w-full text-center h-12 my-3 text-white border-2 border-white font-medium rounded-lg pt-2 px-5 md:my-0"
              >
                <div className="flex items-center justify-between ">
                  ثبت نام رانندگان
                  <img className=" w-5 h-5" src='./images/icons8-car-50.png' />
                </div>
              </span>
              <span
                className="block cursor-pointer w-full text-center h-12 my-3 text-white border-2 border-white font-medium rounded-lg pt-2 px-5 md:my-0"
              >
                <div className="flex items-center justify-between ">
                  دانلود اپلیکیشن مسافران
                  {arrowDown}
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(DownApp);
