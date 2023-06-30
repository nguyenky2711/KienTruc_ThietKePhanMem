// import React from 'react'
// import { Routes, Route, Navigate, Router } from 'react-router-dom';
// import Home from '../pages/Home.jsx';
// import AllEmployee from '../pages/AllEmployee.jsx'
// import ListParks from '../pages/ListParks.jsx'
// import CostSetting from '../pages/CostSetting.jsx'
// import CheckSecurity from '../pages/CheckSecurity.jsx'
// import Login from '../pages/Login.jsx';
// import Layout from '../components/Layouts/Layout.js';



// const Routers = () => {
//     return (
//         <Routes>
//             <Route path='/' element={<Login />} />
//                 <Route path='/layout' element={<Layout />} />

//                 <Route />
//                 {/* <Route path='/home' element={<Home />} />
//               <Route path='/list-employee' element={<AllEmployee />} />
//               <Route path='/list-park' element={<ListParks />} />
//               <Route path='/list-cost' element={<CostSetting />} />
//               <Route path='/list-camera' element={<CheckSecurity />} /> */}

//             <Route />
//         </Routes>
//     )
// }

// export default Routers

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layouts/Layout';
import AllEmployee from '../pages/AllEmployee';
import ListParks from '../pages/ListParks';
import CostSetting from '../pages/CostSetting';
import CheckSecurity from '../pages/CheckSecurity';
import Home from '../pages/Home';
import Login from '../pages/Login';

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            {/* <Route path="/layout" element={<Layout />}> */}
            {/* <Route index path="/" element={<Home />} /> */}
            <Route index path="list-employee" element={<AllEmployee />} />
            <Route index path="list-park" element={<ListParks />} />
            <Route index path="list-cost" element={<CostSetting />} />
            <Route index path="list-camera" element={<CheckSecurity />} />
            {/* </Route> */}
        </Routes>
    );
};

export default Routers;

