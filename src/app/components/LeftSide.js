import Image from "next/image";
import React from "react";

const LeftSide = () => {
  return (
    <div>
      <div className="text-[#12372A] font-bold text-4xl text-center flex flex-col gap-5 items-center justify-center">
        <Image priority src="/Vector.png" alt="logo" height="100" width="100" />
        <h2>Payment gateway</h2>
      </div>
      <p className="text-[#A3AED0] text-center">
        Enter school location details
      </p>
    </div>
  );
};

export default LeftSide;
