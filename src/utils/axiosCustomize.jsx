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
  // console.log("check store>>:", store.getState())
  const access_token = store?.getState()?.user?.account?.access_token;

  config.headers["Authorization"] = "Bearer " + access_token;
  NProgress.start()



  return config;
}, function (error) {

  return Promise.reject(error);
});


instance.interceptors.response.use(function (response) {
  // console.log("interceptor:", response.data)
  NProgress.done()
  return response
}, function (error) {
  const originalRequest = error.config;


  if (error.response.status === 401 && error.response.message === "Unauthorized" || error.response.status === 403
  ) {
    // console.log("Error response code: ", error.response.status)

    const refresh_token = store?.getState()?.user?.account?.refresh_token;
    // console.log("refresh_token:", refresh_token)
    return instance
      .post("/auth/refresh", { refresh_token })
      .then((response) => {

        // console.log(" >>> RESPONSE:", response)

        const new_access_token = response.data.accessToken;
        store.dispatch(userSlice.actions.updateAccessToken(new_access_token));

        // console.log("new access token: ", new_access_token)

        originalRequest.headers["Authorization"] = "Bearer " + new_access_token;

        // console.log("org Request: ", originalRequest)
        // console.log("org header: ", originalRequest.headers)
        return instance(originalRequest);
      })
      .catch((error) => {

        throw error;
      });
  }


  return error && error.response && error.response.data ?
    error.response.data : Promise.reject(error);
});


export default instance