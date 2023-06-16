import React from "react";
type Props = {
  children: React.ReactNode;
  style?: Object;
  className?: string;
  id?: any;
};

const BlockBanner = ({ children, style = {}, className = "", id }: Props) => {
  return (
    <div className={`${className} block-banner`} style={style} id={id}>
      {children}
    </div>
  );
};

export default BlockBanner;
