import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import AllEmployee from '../pages/AllEmployee.jsx'
import ListParks from '../pages/ListParks.jsx'
import CostSetting from '../pages/CostSetting.jsx'
import CheckSecurity from '../pages/CheckSecurity.jsx'


const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/list-employee' element={<AllEmployee />} />
            <Route path='/list-park' element={<ListParks />} />
            <Route path='/list-cost' element={<CostSetting />} />
            <Route path='/list-camera' element={<CheckSecurity />} />
        </Routes>
    )
}

export default Routers
