import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const Footer: FC<IProps> = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600 text-center">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How LicoRoom works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Licodeao Plus</p>
        <p>Licodeao Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not real site</p>
        <p>Its a pretty awesome clone</p>
        <p>Referrals accepted</p>
        <p>Licodeao</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Licodeao</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Licodeao Plus</p>
        <p>Licodeao Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Centre</p>
        <p>Trust & Safety</p>
        <p>Say Hi Licodeao</p>
        <p>Easter Eggs</p>
        <p>For the win</p>
      </div>
    </div>
  );
};

export default memo(Footer);
Footer.displayName = "Footer";
