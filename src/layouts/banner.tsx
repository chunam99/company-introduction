import React from "react";
import styled, { css } from "styled-components";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import banner1 from "@/assets/images/banner1.jpeg";
import banner2 from "@/assets/images/banner2.jpeg";
import banner3 from "@/assets/images/banner3.jpeg";

const Banner = () => {
  const listBanner = [
    {
      id: 1,
      img: banner1,
    },
    {
      id: 2,
      img: banner2,
    },
    {
      id: 3,
      img: banner3,
    },
  ];
  return (
    <>
      <div className="max-h-[500px] h-full">
        <SwiperComponent
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          loop={true}
          navigation
          modules={[Navigation]}
        >
          <div className="h-full">
            <div className="flex gap-14 mt-14 items-center justify-center flex-wrap">
              {listBanner.map((item) => (
                <SwiperSlide key={item.id}>
                  <BackgroundWrapper url={item.img.src} />
                </SwiperSlide>
              ))}
            </div>
          </div>
        </SwiperComponent>
      </div>
    </>
  );
};

export default Banner;

const BackgroundWrapper = styled.div<{ url?: any }>`
  height: 500px;
  width: 100%;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  opacity: 1;
  visibility: inherit;
`;
