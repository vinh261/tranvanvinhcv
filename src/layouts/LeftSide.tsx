"use client";

import Image from "next/image";

const LeftSide = () => {
  return (
    <div className="w-1/3 bg-gray-500 h-screen fixed z-10">
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
