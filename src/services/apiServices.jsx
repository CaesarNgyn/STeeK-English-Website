import axios from "axios"

const postRegister = (userEmail, userName, userPassword) => {
  return axios.post(`http://localhost:6969/users`, {
    email: userEmail, username: userName, password: userPassword
  })
}

export { postRegister }