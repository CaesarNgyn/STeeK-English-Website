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
  },
});

export const { doLogin } = userSlice.actions;
export default userSlice.reducer;