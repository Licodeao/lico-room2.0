import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import img from "@/assets/images/1.jpeg";
import Image from "next/image";

interface IProps {
  children?: ReactNode;
}

const Banner: FC<IProps> = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image src={img} alt="image" fill objectFit="cover" priority />
      <div className="absolute top-1/4 w-full text-center">
        <p className="text-sm sm:text-lg font-light">
          Not sure where to go? Oops!
        </p>
        <button className="text-orange-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I can help you
        </button>
      </div>
    </div>
  );
};

export default memo(Banner);
Banner.displayName = "Banner";
