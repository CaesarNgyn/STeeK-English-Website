

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
import Student from "./components/Admin/Student";
import Course from "./components/Admin/Course";
import Study from "./components/User/Study"
import Roadmap from "./components/User/Roadmap";
const Layout = () => {
  return (
    <>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />

        <Route path='/home' element={<App />} >
          <Route index element={<User />} />
          <Route path='study' element={<Study />} />
          <Route path='roadmap' element={<Roadmap />} />
          <Route path='admin' element={<Admin />} />
          <Route path='admin/student' element={<Student />} />
          <Route path='admin/course' element={<Course />} />
        </Route>

      </Routes>

    </>
  )
}

export default Layout