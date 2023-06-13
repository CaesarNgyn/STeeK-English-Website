import { createSlice } from '@reduxjs/toolkit';



const userSlice = createSlice({
  name: 'user',
  initialState: {
    account: {
      access_token: '',
      refresh_token: '',
      email: '',
      roles: '',
    },
    isAuthenticated: false,
  },
  reducers: {
    doLogin: (state, action) => {
      const DT = action.payload;
      console.log(">>DT:", DT)
      state.account.access_token = DT.accessToken;
      state.account.refresh_token = DT.refreshToken;
      state.account.email = DT.UserInfo.email;
      state.account.roles = DT.UserInfo.roles;
      state.isAuthenticated = true;
    },
    doLogout: (state, action) => {
      // Reset state to initial values
      state.account.access_token = '';
      state.account.refresh_token = '';
      state.account.email = '';
      state.account.roles = '';
      state.isAuthenticated = false;
    },
    updateAccessToken: (state, action) => {
      // const payLoad = action.payload
      // console.log("action payload: ", payLoad)
      state.account.access_token = action.payload;

    },
  },
});

export const { doLogin, doLogout, updateAccessToken } = userSlice.actions;
export default userSlice.reducer;