import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import HomePage from './components/HomePage/HomePage'
import Header from './components/Header/Header'
import NotFound from './components/404 Not Found/NotFound'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <>
      <div className="app-container">
        <div className='header-container'>
          <Header />
        </div>
        <div className='body-container'>
          <div className='sidenav-container'></div>
          <div className='app-content'>
            <Outlet />
            {/* <p1>Main content goes here</p1> */}
          </div>
        </div>
        <div className='footer-container'>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
