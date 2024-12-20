import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-2 justify-center items-center w-[60%] mx-auto my-2 text-white">
      <div>@2024. All Right Reserved Made by..</div>
      <div className="flex gap-4">
        <div>Instructions</div>
        <div>License</div>
        <div>Terms of use</div>
        <div>Policy</div>
      </div>
    </div>
  );
};

export default Footer;
