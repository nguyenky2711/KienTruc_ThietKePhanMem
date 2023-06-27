import React from 'react'
import Header from '../Header/Header.jsx'
import Routes from '../../routes/Routers.js'
import NavBar from '../NavBar/NavBar.jsx'
import Login from '../../pages/Login.jsx'
import { useSelector } from 'react-redux'

import { BrowserRouter as Router } from 'react-router-dom';
// import PrivateRoutes from '../../routes/PrivateRoutes.js'
// import PublicRoutes from '../../routes/PublicRoutes.js'
const Layout = () => {
  // const { role } = useSelector((state) => state.profile)
  // const role = 'Quản lý'
  const role = 'Nhân Vien'
  return (
    <>
      <Login></Login> 
      <div style={role!=='Quản lý' ? {} : { display: 'flex', justifyContent: 'space-between' }}>
        {
          role!=='Quản lý' ? <Header /> : <NavBar />
        }

        <Routes />

      </div>

      {/* <>
        {role === 'Quản lý' || role === 'Nhân Vien' ? (
          <PrivateRoutes role={role} />
        ) : (
          <PublicRoutes />
        )}
      </> */}
    </>

  )
}

export default Layout


