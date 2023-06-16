import React from "react";
import { Title } from "../../interfaces";

const Title = ({ title }: Title) => {
  return (
    <div className="border-solid border-b-2 border-[#49b2ed]">
      <span className="bg-[#49b2ed] text-white px-3 pt-2 pb-1 uppercase">
        {title}
      </span>
    </div>
  );
};

export default Title;
