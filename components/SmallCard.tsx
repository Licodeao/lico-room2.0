import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import Image from "next/image";

interface IProps {
  children?: ReactNode;
  img?: string;
  location?: string;
  distance?: string;
}

const SmallCard: FC<IProps> = ({ img, location, distance }) => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative h-16 w-16">
        <Image src={img!} alt="image" fill className="rounded-lg" sizes="16" />
      </div>

      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

export default memo(SmallCard);
SmallCard.displayName = "SmallCard";
