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
  //takeLastest => 액션 모니터링 함수, 특정 액션 타입의 가장 마지막에 디스패치된 액션만 처리
  //takeEvery => 특정 액션 타입에 대하여 디스패치되는 모든 액션들을 처리
}

export default function* loginsaga() {
  yield all([fork(watchLogin)]);
}
