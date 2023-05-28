import React from 'react'
import Header from '../Header/Header.jsx'
import Routes from '../../routes/Routers.js'
import NavBar from '../NavBar/NavBar.jsx'

const Layout = () => {
  return (
    <div>
        <Header/>
        {/* <NavBar></NavBar> */}
        <div>
            <Routes/>
        </div>
    </div>
  )
}

export default Layout