import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import Image from "next/image";

interface IProps {
  children?: ReactNode;
  img: string;
  title: string;
}

const MediumCard: FC<IProps> = ({ img, title }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image src={img} alt="image" fill className="rounded-xl" priority />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
};

export default memo(MediumCard);
MediumCard.displayName = "MediumCard";
