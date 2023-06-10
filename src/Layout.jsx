

import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import HomePage from './components/HomePage/HomePage'
import App from './App'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import NotFound from "./components/404 Not Found/NotFound";
import User from "./components/User/User";
import 'react-toastify/dist/ReactToastify.css';
import Admin from "./components/Admin/Admin";
import Student from "./components/Admin/Student";
import Course from "./components/Admin/Course";
import Study from "./components/User/Study"
import Roadmap from "./components/User/Roadmap";
import { ToastContainer } from 'react-toastify';
import { useSelector } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";

const Layout = () => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)
  console.log(isAuthenticated)
  return (
    <>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />

        <Route element={<ProtectedRoute isAuthenticated={false} />}>
          <Route path="/home" element={<App />}>
            <Route index element={<User />} />
            <Route path="study" element={<Study />} />
            <Route path="roadmap" element={<Roadmap />} />
            <Route path="admin" element={<Admin />} />
            <Route path="admin/student" element={<Student />} />
            <Route path="admin/course" element={<Course />} />
          </Route>
        </Route>




      </Routes >

      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />


    </>
  )
}

export default Layout