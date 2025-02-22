"use client";

import Image from "next/image";

const LeftSide = () => {
  return (
    <div className="xl:w-1/3 bg-gray-500 xl:h-screen xl:fixed xl:z-10 md:z-0 md:relative md:w-full md:h-auto sm:z-0 sm:relative sm:w-full sm:h-auto">
      <Image
        src="https://github.com/vinh261/vVinhCv/blob/main/src/assets/profile.jpg?raw=true"
        alt="Tran Van Vinh"
        width={500}
        height={1000}
        className="w-full h-full"
      />
    </div>
  );
};

export default LeftSide;
