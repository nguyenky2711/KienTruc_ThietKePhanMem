import React from 'react'
import Header from '../Header/Header.jsx'
import Routes from '../../routes/Routers.js'
import NavBar from '../NavBar/NavBar.jsx'

const Layout = () => {
  const role = false

  return (
    <div style={role ? {} : { display: 'flex', justifyContent: 'space-between' }}>
      {
        role ? <Header /> : <NavBar />
      }

      <Routes />

    </div>
  )
}

export default Layout