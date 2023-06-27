import React from 'react';
import { Route, Switch,Routes } from 'react-router-dom';
import Login from '../pages/Login';

const PublicRoutes = () => (
  <Routes>
    <Route path="/login" component={Login} />
    {/* Add other public routes */}
  </Routes>
);

export default PublicRoutes;
