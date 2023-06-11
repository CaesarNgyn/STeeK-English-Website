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
import { store, persistor } from './redux/store.js';
import 'nprogress/nprogress.css'
import { PersistGate } from 'redux-persist/integration/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <PersistGate loading={null} persistor={persistor}>
      {/* <React.StrictMode> */}
      <BrowserRouter>
        <Layout />

      </BrowserRouter>
      {/* </React.StrictMode> */}
    </PersistGate>
  </Provider>,
)
