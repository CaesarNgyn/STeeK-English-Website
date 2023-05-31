

import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import HomePage from './components/HomePage/HomePage'
import App from './App'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import NotFound from "./components/404 Not Found/NotFound";
const Layout = () => {
  return (
    <>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </>
  )
}

export default Layout