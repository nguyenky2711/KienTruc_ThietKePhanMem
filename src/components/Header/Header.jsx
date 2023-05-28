import React, { useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import "../../styles/header.css";
import NavBar from "../NavBar/NavBar";

const nav__links = [
  {
    display: "Quẹt thẻ xe",
    path: "/home",
  },
  {
    display: "Kiểm tra số lượng xe",
    path: "/list-park",
  },
];
const Header = () => {
  const headerRef = useRef(null);
  const flag = true;
  return (
    <div>
      {flag ? (
        <header className="App-header" ref={headerRef}>
          <div className="">
            <div className="header-cover">
              <div className="header-left">
                {/* <a href="">Quẹt thẻ xe</a>
              <a href="">Kiểm tra số lượng xe</a> */}
                {nav__links.map((item, index) => (
                  <NavLink
                    to={item.path}
                    key={index}
                    className={(navClass) =>
                      navClass.isActive ? "active__menu" : ""
                    }
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
              <div className="header-right">
                <div className="img_user">
                  {/* <img src="../../banner.jpg"></img> */}
                </div>
                <div className="info_user">
                  <p className="role_user">Nhân viên</p>
                  <p className="name_user">Đỗ Nam Trung</p>
                </div>
              </div>
            </div>
          </div>
        </header>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
