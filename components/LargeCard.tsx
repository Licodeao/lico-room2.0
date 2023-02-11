import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import Image from "next/image";
import footer from "@/assets/images/footer.webp";

interface IProps {
  children?: ReactNode;
  title: string;
  description: string;
  buttonText: string;
}

const LargeCard: FC<IProps> = ({ title, description, buttonText }) => {
  return (
    <div className="relative h-96 min-w-[300px]">
      <Image
        src={footer}
        alt="image"
        priority
        fill
        objectFit="cover"
        className="rounded-2xl"
      />

      <div className="absolute top-16 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <button className="text-sm text-white bg-gray-900 px-4 py-2 mt-5 rounded-lg">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default memo(LargeCard);
LargeCard.displayName = "LargeCard";
