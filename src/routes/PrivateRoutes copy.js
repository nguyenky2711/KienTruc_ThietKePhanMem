import React from 'react';
import { Route, Redirect, Switch,Routes, Navigate } from 'react-router-dom';
import AllEmployee from '../pages/AllEmployee';
import CostSetting from '../pages/CostSetting';
import ListParks from '../pages/ListParks';
import CheckSecurity from '../pages/CheckSecurity';

// Component PrivateRoute kiểm tra xác thực và điều hướng đến trang khác
const PrivateRoute = ({ component: Component, role, ...rest }) => (
  <Routes
    {...rest}
    render={(props) =>
      role === 'Quản lý' || role === 'Nhân Vien' ? (
        <Component {...props} />
      ) : (
        <Navigate  to="/login" replace/>
      )
    }
  />
);

const PrivateRoutes = ({ role }) => (
  <Routes>
    <PrivateRoute exact path="/manager" role={role} component={AllEmployee} />
    <PrivateRoute
      path="/manager/cost"
      role={role}
      component={CostSetting}
    />
    <PrivateRoute path="/manager/park" role={role} component={ListParks} />
    <PrivateRoute
      path="/manager/camera"
      role={role}
      component={CheckSecurity}
    />
    {/* Add other private routes for different roles */}
  </Routes>
);

export default PrivateRoutes;
