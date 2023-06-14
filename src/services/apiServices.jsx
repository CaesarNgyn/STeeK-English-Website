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


export { postRegister, postLogin, postFindUser, getAllCourses, patchUpdateUser }