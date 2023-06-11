import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import Forbidden from './components/403 Forbidden/Forbidden'
const ProtectedRouteAdmin = (props) => {
  if (props.isAuthenticated === false) {
    return <Navigate to="/login" />;
  }

  if (props.role === "Admin") {
    return <Outlet />;
  }

  if (props.role === "User") {
    return <Forbidden />;
  }

  return null;
};

export default ProtectedRouteAdmin;