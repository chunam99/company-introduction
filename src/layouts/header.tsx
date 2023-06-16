/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Menu } from "antd";
import React, { useEffect, useState } from "react";

import BlockContent from "../components/BlockContent";

export default function Header() {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }, [alert]);

  const dataMenu = [
    {
      title: "Trang chủ",
      onclick: "/",
    },
    {
      title: "Giới thiệu",
      onclick: "/gioi-thieu",
    },
    {
      title: "Lĩnh vực hoạt động",
      onclick: "/linh-vuc-hoat-dong",
    },
    {
      title: "Tin tức",
      onclick: "/tin-tuc",
    },
    {
      title: "Tuyển dụng",
      onclick: "/tuyen-dung",
    },
    {
      title: "Liên hệ",
      onclick: "/lien-he",
    },
  ];
  const [active, setActive] = useState<any>("");
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    setActive(window.location.pathname);
  }, []);
  useEffect(() => {
    const handleScroll = (event: any) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };
  const handleClickMenu = (val: any) => {
    sessionStorage.setItem("menu-active", val.onclick);
  };

  useEffect(() => {
    setActive(sessionStorage.getItem("menu-active"));
  }, [handleClickMenu]);

  return (
    <React.Fragment>
      <div className={`header-app w-full`}>
        <BlockContent>
          <div className="py-[15px]">
            <div className="flex gap-4">
              <div className="logo">
                <img
                  alt="logo"
                  src=""
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    sessionStorage.setItem("menu-active", "");
                  }}
                  className="cursor-pointer "
                />
              </div>
              <Menu className="menu flex bg-transparent w-full">
                {dataMenu.map((item, key) => (
                  <Menu.Item
                    className="glow-on-hover menu__item relative"
                    key={key}
                  >
                    <a
                      href={item.onclick}
                      className={`${active === item.onclick && "active-menu"}`}
                    >
                      {item.title}
                    </a>
                  </Menu.Item>
                ))}
              </Menu>
            </div>
            <div
              className="menuButton hidden w-[30px] cursor-pointer"
              onClick={showDrawer}
            >
              <MenuOutlined />
            </div>
            <Drawer
              placement="right"
              closable={true}
              onClose={showDrawer}
              open={visible}
              style={{ zIndex: 99999 }}
            >
              <Menu>
                {dataMenu.map((item, key) => (
                  <Menu.Item key={key} className="capitalize">
                    <a
                      className={`${active === item.onclick && "active-menu"}`}
                      href={`${item.onclick}`}
                    >
                      {item.title}
                    </a>
                  </Menu.Item>
                ))}
              </Menu>
            </Drawer>
          </div>
        </BlockContent>
      </div>
    </React.Fragment>
  );
}
