import React from "react";

const IntroRight = () => {
  return (
    <div className="relative">
      <div className="bg-[#FBD8BE] h-[40px] w-[400px] rounded-t-lg flex items-center pl-[10px]">
        <div className="flex gap-1">
          <div className="h-[12px] w-[12px] rounded-full bg-[#FC964C]"></div>
          <div className="h-[12px] w-[12px] rounded-full bg-[#FC964C]"></div>
          <div className="h-[12px] w-[12px] rounded-full bg-[#FDEBDE]"></div>
        </div>
      </div>
      <div className="bg-[#FBE3D2] h-[400px] w-[400px] rounded-b-lg">
        <img
        className="absolute h-[400px]"
        src="https://udaykumar.life/static/media/UdayCropped.28e558b568374351ad31.webp"
        alt=""
      />
      </div>

      
    </div>
  );
};

export default IntroRight;
