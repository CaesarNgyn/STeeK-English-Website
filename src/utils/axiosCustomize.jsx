import axios from "axios";
import NProgress from 'nprogress'
import { store } from "../redux/store";

NProgress.configure({
  showSpinner: false
})


const instance = axios.create({
  baseURL: 'http://localhost:6969/',

});

instance.interceptors.request.use(function (config) {
  console.log("check store>>:", store.getState())
  const access_token = store?.getState()?.user?.account?.access_token;

  config.headers["Authorization"] = "Bearer " + access_token;
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

  return response
}, function (error) {
  const originalRequest = error.config;

  // Check if the error status is 401 (unauthorized) or any other relevant status code
  if (error.response.status === 401 && error.response.message === "Unauthorized") {
    console.log(error.response.status)
    // Get the refresh_token from your store
    const refresh_token = store?.getState()?.user?.account?.refresh_token;

    // Make a request to the /auth/refresh endpoint with the refresh_token
    return instance
      .post("/auth/refresh", { refresh_token })
      .then((response) => {
        // Update the access_token in your store with the new one received from the response
        const new_access_token = response.data.access_token;
        // Update the Authorization header with the new access_token
        originalRequest.headers["Authorization"] = "Bearer " + new_access_token;

        // Retry the original request with the updated access_token
        return instance(originalRequest);
      })
      .catch((error) => {
        // Handle the error during token refresh
        // For example, you can redirect to the login page or show an error message
        throw error;
      });
  }

  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  NProgress.done()
  return error && error.response && error.response.data ?
    error.response.data : Promise.reject(error);
});


export default instance