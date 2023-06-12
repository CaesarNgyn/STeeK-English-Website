import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import Forbidden from './components/403 Forbidden/Forbidden'
const ProtectedRouteUser = (props) => {
  // if (props.isAuthenticated === false) {
  //   return <Navigate to="/login" />;
  // }

  // if (props.role === "User") {
  //   return <Outlet />;
  // }

  // if (props.role === "Admin") {
  //   return <Forbidden />;
  // }

  // return null;
  return <Outlet />
};

export default ProtectedRouteUser;