import React from 'react';
import { Route, Switch,Routes } from 'react-router-dom';
import Login from '../pages/Login';

const PublicRoutes = () => (
  
  <Routes>
    <Route  path="/" element={<Login />} />
    {/* Add other public routes */}
  </Routes>
  // console.log(123)
);

export default PublicRoutes;
