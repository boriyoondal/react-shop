import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type LoginState = {
  id: string | null;
  name: string;
  logInLoading: boolean; // 로그인
  logInDone: boolean;
  logInError: unknown;
};

export type User = {
  id: string;
  pw: string;
};

const initialState: LoginState = {
  id: null,
  name: "",
  logInLoading: false,
  logInDone: false,
  logInError: null,
};

export const loginSlice = createSlice({
  name: "Login",
  initialState,

  reducers: {
    loginRequest(state = initialState, action: PayloadAction<User>) {
      state = { ...state, logInLoading: true, logInDone: false, logInError: null };
      return state;
    },

    loginSuccess(state = initialState, action: PayloadAction<User>) {
      state = { ...state, logInLoading: false, logInDone: true, id: action.payload.id };
      return state;
    },

    loginFail(state = initialState, action: PayloadAction) {
      state = { ...state, logInLoading: false, logInError: action.payload };
      return state;
    },

    logoutAction(state = initialState, action: PayloadAction) {
      console.log("rtk/logOut");
      localStorage.removeItem("login");
      state = { ...state, id: null };
      return state;
    },
  },
});

export const { loginRequest, loginSuccess, loginFail, logoutAction } = loginSlice.actions;
export default loginSlice.reducer;
