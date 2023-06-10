import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux';
import Layout from './Layout.jsx';
import Header from './components/Header/Header.jsx';
import Login from './components/Auth/Login.jsx';
import store from './redux/store.js';
import 'nprogress/nprogress.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <React.StrictMode>
      <BrowserRouter>
        <Layout />

      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
)
