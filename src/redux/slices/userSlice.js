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
      const { DT } = action.payload;
      state.account.access_token = DT.access_token;
      state.account.refresh_token = DT.refresh_token;
      state.account.username = DT.username;
      state.account.image = DT.image;
      state.account.role = DT.role;
      state.isAuthenticated = true;
    },
  },
});

export const { doLogin } = userSlice.actions;
export default userSlice.reducer;