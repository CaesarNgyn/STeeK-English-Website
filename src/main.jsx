import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

import Layout from './Layout.jsx';
import Header from './components/Header/Header.jsx';
import Login from './components/Auth/Login.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout />

    </BrowserRouter>
  </React.StrictMode>,
)
