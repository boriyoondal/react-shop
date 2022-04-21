import {
  loginRequestAction,
  loginSuccessAction,
  loginFailAction,
  logOutAction,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_ACTION,
} from "./action";

export type LoginAction =
  | ReturnType<typeof loginRequestAction>
  | ReturnType<typeof loginSuccessAction>
  | ReturnType<typeof loginFailAction>
  | ReturnType<typeof logOutAction>;

export type LoginState = {
  id: string | null;
  name: string;
  logInLoading: boolean; // 로그인
  logInDone: boolean;
  logInError: unknown;
};
const initialState: LoginState = {
  id: null,
  name: "",
  logInLoading: false,
  logInDone: false,
  logInError: null,
};

export default function reducer(state: LoginState = initialState, action: LoginAction) {
  switch (action.type) {
    case LOGIN_REQUEST:
      console.log("reducer/ login 요청");
      return {
        ...state,
        logInLoading: true,
        logInDone: false,
        logInError: null,
      };

    case LOGIN_SUCCESS:
      console.log("reducer/ login 성공");
      return {
        ...state,
        logInLoading: false,
        logInDone: true,
        id: action.data.id,
      };

    case LOGIN_FAIL:
      console.log("reducer / login 실패");
      return {
        ...state,
        logInLoading: false,
        logInError: action.error,
      };

    case LOGOUT_ACTION:
      localStorage.removeItem("login");
      console.log("로그아웃");
      return {};

    default: {
      return {
        ...state,
      };
    }
  }
}
