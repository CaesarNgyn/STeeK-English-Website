import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:6969/',

});

instance.interceptors.request.use(function (config) {

  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  console.log("interceptor:", response.data)
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response
}, function (error) {

  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return error && error.response && error.response.data ?
    error.response.data : Promise.reject(error);
});


export default instance