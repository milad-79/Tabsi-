import React from "react";

function DropDwon() {

  return (
    <div className="w-full px-2 py-3 text-right fixed top-14 border-b border-gray-200 z-50 bg-white">
      <span className="text-15px py- hover:text-orange block cursor-pointer">
        وبلاگ
      </span>
      <span className="text-15px py-2 hover:text-orange block cursor-pointer">
        فرصت های شغلی
      </span>
      <span className="text-15px py-2 hover:text-orange block cursor-pointer">
        خدمات کسب وکار
      </span>
      <span className="text-15px py-2 hover:text-orange block cursor-pointer">
        معرفی راننده
      </span>
      <span className="text-15px py-2 hover:text-orange block cursor-pointer">
        پشتیبانی
      </span>
    </div>
  );
}

export default React.memo(DropDwon);
