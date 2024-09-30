import Image from "next/image";
import React from "react";
import "../app/globals.css";

const CustomShapeIcon = () => {
  return (
    <>
      <Image
        src="/myImage.svg"
        height={140}
        width={150}
        className="svg-image"
        alt="svg"
      />
    </>
  );
};

export default CustomShapeIcon;
