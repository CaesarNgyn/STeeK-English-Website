import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = (props) => {
  // const isAuthenticated = false
  return props.isAuthenticated ?
    <Outlet /> : <Navigate to='/login' />;
}

export default ProtectedRoute;