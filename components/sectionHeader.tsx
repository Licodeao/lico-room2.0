import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
  title?: string;
}

const SectionHeader: FC<IProps> = (props) => {
  const { title } = props;
  return <p className="text-4xl font-semibold pb-5">{title}</p>;
};

export default memo(SectionHeader);
SectionHeader.displayName = "SectionHeader";
