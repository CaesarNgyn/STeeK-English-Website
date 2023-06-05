

import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import HomePage from './components/HomePage/HomePage'
import App from './App'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import NotFound from "./components/404 Not Found/NotFound";
import User from "./components/User/User";
import Admin from "./components/Admin/Admin";
const Layout = () => {
  return (
    <>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<App />} >
          <Route index element={<User />} />
          <Route path='admin' element={<Admin />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </>
  )
}

export default Layout