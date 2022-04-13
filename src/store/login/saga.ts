import { all, fork, takeLatest, delay, put } from "redux-saga/effects";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  loginRequestAction,
  loginSuccessAction,
  loginFailAction,
} from "./action";

export type LoginAction =
  | ReturnType<typeof loginRequestAction>
  | ReturnType<typeof loginSuccessAction>
  | ReturnType<typeof loginFailAction>;

function* login(action: LoginAction) {
  try {
    console.log("saga/login");
    yield delay(2000);
    yield put({
      type: LOGIN_SUCCESS,
    });
  } catch (error: unknown) {
    yield put({
      type: LOGIN_FAIL,
      //@ts-ignore
      error: error.response.data,
    });
  }
}

function* watchLogin() {
  //EventListener
  console.log("saga/watchlogin");
  yield takeLatest(LOGIN_REQUEST, login);
}

export default function* loginsaga() {
  yield all([fork(watchLogin)]);
}
