import React from "react";

const FieldOfActivity = () => {
  const data = [
    {
      id: 1,
      img: "https://kiemdinh1.vn/wp-content/uploads/2018/03/1-2.jpg",
      title: "Kiểm định kỹ thuật an toàn",
    },
    {
      id: 2,
      img: "https://kiemdinh1.vn/wp-content/uploads/2018/03/1-2.jpg",
      title: "Huấn luyện an toàn, vệ sinh lao động",
    },
    {
      id: 3,
      img: "https://kiemdinh1.vn/wp-content/uploads/2018/03/1-2.jpg",
      title: "Dịch vụ kỹ thuật an toàn, thử nghiệm",
    },
    {
      id: 4,
      img: "https://kiemdinh1.vn/wp-content/uploads/2018/03/1-2.jpg",
      title: "Dịch vụ kỹ thuật an toàn, thử nghiệm",
    },
    {
      id: 5,
      img: "https://kiemdinh1.vn/wp-content/uploads/2018/03/1-2.jpg",
      title: "Quan trắc môi trường lao động",
    },
    {
      id: 6,
      img: "https://kiemdinh1.vn/wp-content/uploads/2018/03/1-2.jpg",
      title: "Giám định thương mại sản phẩm hàng hóa nhập khẩu",
    },
  ];
  return (
    <div className="grid  grid-cols-[auto_auto_auto] gap-5 justify-between">
      {data.map((item) => (
        <a
          className="flex flex-col items-center gap-5 max-w-[400px]"
          key={item.id}
          href="#"
        >
          <div className="aio-icon-img animated fadeIn delay-03">
            <img className="img-icon" alt="null" src={item.img} width="100%" />
          </div>
          <div className="text-[#49b2ed] text-[19px] text-center">
            {item.title}
          </div>
        </a>
      ))}
    </div>
  );
};

export default FieldOfActivity;
