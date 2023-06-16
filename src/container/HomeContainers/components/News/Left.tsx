import React from "react";
import Title from "@/components/Title";
import { dataNews } from "@/constans";

const Left = () => {
  return (
    <div>
      <Title title="Tin tức - sự kiện" />
      <div className="flex gap-5">
        <div className="flex-2 max-w-[300px]">
          <div className="flex flex-col">
            <a href="#" rel="bookmark">
              <img
                width="324"
                height="235"
                src="https://kiemdinh1.vn/wp-content/uploads/2023/03/TUYEN-DUNG-NHAN-SU-thang10_2016-324x235.jpg"
                alt=""
                title=""
              />
            </a>
          </div>
          <div className="flex items-center mt-1">
            <span className="text-[11px] text-black">
              <a href="https://kiemdinh1.vn/author/kiemdinh/">kiemdinh</a>
            </span>
            <span className="text-[11px] text-gray-300">
              <span className="px-1">-</span>
              <time className="">17 Tháng Ba, 2023</time>
            </span>
          </div>
          <div className="text-[13px] uppercase text-[#777] mt-2">
            TRUNG TÂM KIỂM ĐỊNH KỸ THUẬT AN TOÀN KHU VỰC I THÔNG BÁO TUYỂN DỤNG
          </div>
        </div>
        <div className="flex flex-col gap-6">
          {dataNews.map((item) => (
            <div className="flex gap-4" key={item.id}>
              <img
                src={item.image}
                alt=""
                width={100}
                height={70}
                className="bg-blue-300"
              />
              <div>
                <div className="text-[12px] font-[500] leading-5 text-black uppercase ">
                  {item.title}
                </div>
                <span className="text-[11px] text-gray-300">
                  <time className="">{item.time}</time>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Left;
