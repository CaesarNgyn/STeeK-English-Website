import axios from "axios";
import NProgress from 'nprogress'

NProgress.configure({
  showSpinner: false
})


const instance = axios.create({
  baseURL: 'http://localhost:6969/',

});

instance.interceptors.request.use(function (config) {
  NProgress.start()

  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // console.log("interceptor:", response.data)
  NProgress.done()

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