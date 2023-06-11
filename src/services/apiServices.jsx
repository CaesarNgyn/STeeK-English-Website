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
  return axios.post('users/email', {
    email: userEmail
  }).catch(error => {
    if (error.response) {
      return error.response.data
    }
    throw error
  })
}


export { postRegister, postLogin, postFindUser }