import axios from "axios"

const postRegister = (userEmail, userName, userPassword) => {
  return axios.post(`http://localhost:6969/users`, {
    email: userEmail, username: userName, password: userPassword
  }).catch(error => {
    if (error.response) {
      return error.response.data
    }
    throw error
  })
}

export { postRegister }