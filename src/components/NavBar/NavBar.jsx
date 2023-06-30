import React, { useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import "../../styles/navbar.css";

const nav__links = [
  {
    display: "Quản lý nhân viên",
    path: "/list-employee",
  },
  {
    display: "Kiểm tra an ninh",
    path: "/list-camera",
  },

  {
    display: "Thiết lập chi phí",
    path: "/list-cost",
  },

  {
    display: "Bãi giữ xe",
    path: "/list-park",
  },
];
const NavBar = () => {
  const menuRef = useRef(null);
  return (
    <div className="nav-cover">
      <div className="user">
        <img src="https://picsum.photos/50/50" alt="" />
        <p className="user-name">Đỗ Nam Trung</p>
      </div>
      <div className="navigation" ref={menuRef}>
        <div className="menu">
          {nav__links.map((item, index) => (
            <NavLink
              to={`/layout${item.path}`}
              key={index}
              className={(navClass) => (navClass.isActive ? "active__btn" : "")}
            >
              {item.display}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
