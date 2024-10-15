import React from "react";

const LeftSection = () => {
   return (
      <div className="relative flex-1 bg-white flex justify-center items-center overflow-hidden">
         <div className="absolute inset-0 flex justify-center items-center">
            <img
               src="/assets/bgpatch.png" 
               alt="Background Patch"
               className="h-[100%] w-[55%] object-cover" 
            />
         </div>

         <div className="relative h-full w-full">
            <img
               src="/assets/img3.png"
               alt="img1"
               className="w-[138px] h-[147px] absolute top-[96px] left-[300px] z-10 transform transition-all hover:scale-105"
            />
            <img
               src="/assets/img5.png"
               alt="img2"
               className="w-[271px] h-[166px] absolute top-[181px] left-[501px] z-20 transform transition-all border-4 border-[#fff] rounded-md hover:scale-105" 
            />
            <img
               src="/assets/img2.png"
               alt="img3"
               className="w-[275px] h-[281px] absolute top-[264px] border-4 border-[#fff] left-[180px] z-30 transform transition-all hover:scale-105"
            />
            <img
               src="/assets/img1.png"
               alt="img4"
               className="w-[305px] h-[346px] absolute top-[370px] left-[491px] border-4 border-white z-40 transform transition-all hover:scale-105"
            />
            <img
               src="/assets/img4.png"
               alt="img5"
               className="w-[252px] h-[249px] absolute top-[558px] left-[181px] border-4 rounded-md border-white z-50 transform transition-all hover:scale-105"
            />
         </div>
      </div>
   );
};

export default LeftSection;
