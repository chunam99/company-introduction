import React from "react";
import BlockBanner from "../../components/BlockBanner";
import BlockContent from "../../components/BlockContent";
import FieldOfActivity from "../../components/FieldOfActivity";
import img1 from "@/assets/images/sub-banner1.png";
import img2 from "@/assets/images/sub-banner2.png";
import News from "./components/News";
import ServiceRequestAndLocation from "./components/ServiceRequestAndLocation";

const HomeContainer = () => {
  return (
    <div>
      <BlockBanner
        style={{
          background:
            "#ededed url(http://kiemdinh1.vn/wp-content/uploads/2018/04/grid-dark-1.png?id=525)",
        }}
      >
        <div
          className="h-[250px]"
          style={{
            background: `url(${img1.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </BlockBanner>
      <BlockContent>
        <div className="">
          <div className="font-bold text-2xl uppercase text-center my-9 text-[#1e73be]">
            LĨNH VỰC HOẠT ĐỘNG
          </div>
          <FieldOfActivity />
        </div>
      </BlockContent>
      <BlockBanner
        className="mb-12"
        style={{
          background:
            "#ededed url(http://kiemdinh1.vn/wp-content/uploads/2018/04/grid-dark-1.png?id=525)",
        }}
      >
        <div
          className="h-[250px]"
          style={{
            background: `url(${img2.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </BlockBanner>
      <BlockContent>
        <News />
        <ServiceRequestAndLocation />
      </BlockContent>
    </div>
  );
};

export default HomeContainer;
