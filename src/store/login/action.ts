export const LOGIN_REQUEST = "LOGIN_REQUEST" as const;
export const LOGIN_SUCCESS = "LOGIN_SUCCESS" as const;
export const LOGIN_FAIL = "LOGIN_FAIL" as const;
export const LOGOUT_ACTION = "LOGOUT_ACTION" as const;

export const loginRequestAction = (data: { id: string; pw: string }) => ({
  type: LOGIN_REQUEST,
  data,
});

export const loginSuccessAction = (data: { id: string; pw: string }) => ({
  type: LOGIN_SUCCESS,
  data,
});

export const loginFailAction = (error: unknown) => ({
  type: LOGIN_FAIL,
  error,
});

export const logOutAction = () => ({
  type: LOGOUT_ACTION,
});
