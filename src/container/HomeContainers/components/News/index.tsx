import React from "react";
import Left from "./Left";
import Right from "./Right";

const News = () => {
  return (
    <div className="grid grid-cols-[70%_30%] gap-5 mt-8 mb-8 border-b-[1px] pb-8 border-[#ccc]">
      <Left />
      <Right />
    </div>
  );
};

export default News;
