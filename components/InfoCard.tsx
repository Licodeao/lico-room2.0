import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

interface IItemData {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long: number;
  lat: number;
}

interface IProps {
  children?: ReactNode;
  itemData: IItemData;
}

const InfoCard: FC<IProps> = (props) => {
  const { itemData } = props;
  return (
    <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition transform duration-200 ease-out first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={itemData.img}
          alt="image"
          fill
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{itemData.location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl">{itemData.title}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">
          {itemData.description}
        </p>
        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {itemData.star}
          </p>

          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2">
              {itemData.price}
            </p>
            <p className="text-right font-extralight">{itemData.total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(InfoCard);
InfoCard.displayName = "InfoCard";
