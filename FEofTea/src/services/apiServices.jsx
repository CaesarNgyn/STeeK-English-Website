import axios from "../utils/axiosCustomize"

const postRegister = (userEmail, userName, userPassword) => {
  return axios.post(`users`, {
    email: userEmail, username: userName, password: userPassword
  }).catch(error => {
    if (error.response) {
      return error.response.data
    }
    throw error
  })
}

const postLogin = (userEmail, userPassword) => {
  return axios.post('auth/login', {
    email: userEmail, password: userPassword
  }).catch(error => {
    if (error.response) {
      return error.response.data
    }
    throw error
  })
}

const postFindUser = (userEmail) => {
  // console.log("Post find user called!")
  return axios.post('users/email', {
    email: userEmail
  }).catch(error => {
    if (error.response) {
      return error.response.data
    }
    throw error
  })
}

const patchUpdateUser = (username, password, email, address, phone, roles) => {
  // console.log("Post find user called!")
  return axios.patch('users/', {
    username, password, email, address, phone, roles
  }).catch(error => {
    if (error.response) {
      return error.response.data
    }
    throw error
  })
}

const getAllCourses = () => {
  return axios.get('/courses').catch(error => {
    if (error.response) {
      return error.response.data
    }
    throw error
  })

}

const getAllUsers = () => {
  return axios.get('/users').catch(error => {
    if (error.response) {
      return error.response.data
    }
    throw error
  })

}

const deleteUser = (email) => {
  // console.log("email: ", email)
  return axios.delete('/users', { data: { email } }).catch(error => {
    if (error.response) {
      return error.response.data
    }
    throw error
  })

}

const deleteCourse = (title) => {

  return axios.delete('/courses', { data: { title } }).catch(error => {
    if (error.response) {
      return error.response.data
    }
    throw error
  })

}

const patchUpdateCourse = (title, description, price, listVideo) => {
  // console.log("Post find user called!")
  return axios.patch('/courses', {
    title, description, price, listVideo
  }).catch(error => {
    if (error.response) {
      return error.response.data
    }
    throw error
  })
}

const postCreateCourse = (title, description, price, listVideo) => {
  return axios.post(`/courses`, {
    title, description, price, listVideo
  }).catch(error => {
    if (error.response) {
      return error.response.data
    }
    throw error
  })
}

const postChangePasswordUser = (email, currentPassword, newPassword) => {
  return axios.post(`users/password`, {
    email, currentPassword, newPassword
  }).catch(error => {
    if (error.response) {
      return error.response.data
    }
    throw error
  })
}

const postBuyCourse = (email, courseID) => {
  console.log(email, courseID)
  return axios.post(`users/buy`, {
    email, courseID
  }).catch(error => {
    if (error.response) {
      return error.response.data
    }
    throw error
  })
}


export { postRegister, postLogin, getAllUsers, postFindUser, getAllCourses, patchUpdateUser, deleteUser, patchUpdateCourse, postCreateCourse, deleteCourse, postChangePasswordUser, postBuyCourse }