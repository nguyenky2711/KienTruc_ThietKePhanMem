

import React, { useRef } from 'react';
import { Link, NavLink, Outlet, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';

import AllEmployee from '../../pages/AllEmployee.jsx';
import ListParks from '../../pages/ListParks.jsx';
import CostSetting from '../../pages/CostSetting.jsx';
import CheckSecurity from '../../pages/CheckSecurity.jsx';
import './index.css'
const Layout = () => {
  const { profile } = useSelector((state) => state?.slice);
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const nav__links1 = [
    {
      display: "Quẹt thẻ xe",
      path: "/home",
    },
    {
      display: "Kiểm tra số lượng xe",
      path: "/list-park",
    },
  ];
  const navLinks2 = [
    {
      display: 'Quản lý nhân viên',
      path: '/list-employee',
      element: <AllEmployee />, // Thay component bằng element
    },
    {
      display: 'Kiểm tra an ninh',
      path: '/list-camera',
      element: <CheckSecurity />, // Thay component bằng element
    },
    {
      display: 'Thiết lập chi phí',
      path: '/list-cost',
      element: <CostSetting />, // Thay component bằng element
    },
    {
      display: 'Bãi giữ xe',
      path: '/list-park',
      element: <ListParks />, // Thay component bằng element
    },
  ];
  const urlAvatar = `https://aplonis-meln.alwaysdata.net/api/files/_pb_users_auth_/${profile.id}/${profile.avatar}`

  return (
    <div className='main_layout' style={profile?.role !== 'Quản Lý' ? {} : { display: 'flex', justifyContent: 'space-between' }}>
      {profile?.role !== 'Quản Lý' ? (
       <header className="App-header" ref={headerRef}>
       <div className="">
         <div className="header-cover" style={{padding:'0px 50px'}}>
           <div className="header-left">
             {/* <a href="">Quẹt thẻ xe</a>
           <a href="">Kiểm tra số lượng xe</a> */}
             {nav__links1.map((item, index) => (
               <NavLink
                 to={`/layout${item.path}`}
                 key={index}
                 className={(navClass) =>
                   navClass.isActive ? "active__menu" : ""
                 }
                 style={{padding:'8px'}}
               >
                 {item.display}
               </NavLink>
             ))}
           </div>
           <div className="header-right">
             <div className="img_user">
               <img src={urlAvatar} style={{width:'60px'}}></img>
             </div>
             <div className="info_user">
               {/* <p className="role_user">{profile?.role}</p> */}
               <p className="name_user" style={{margin:'5px 0px'}}>{profile?.name}</p>
            <Link to='/' style={{cursor:'pointer'}}>Đăng xuất</Link>

             </div>
           </div>
         </div>
       </div>
     </header>
      ) : (
        <div className="nav-cover" style={{height:'500px'}}>
          <div className="user">
            <img src={urlAvatar} alt=""  style={{width:'60px'}}/>
            <p className="user-name">{profile?.name}</p>
          </div>
          <div className="navigation" ref={menuRef} >
            <div className="menu">
              {navLinks2.map((item, index) => (
                <NavLink
                  key={index}
                  to={`/layout${item.path}`}
                  className={(navClass) => (navClass.isActive ? 'active__btn' : '')}
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
            <Link to='/' style={{cursor:'pointer'}}>Đăng xuất</Link>
          </div>
        </div>
      )}
      <main style={profile?.role !== 'Quản Lý' ? {} : { flexBasis: '70%' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
