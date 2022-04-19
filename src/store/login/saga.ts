import { all, fork, delay, put, takeEvery, call } from "redux-saga/effects";
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

const Login = async (data: { id: string; pw: string }) => {
  const { id, pw } = data;
  const response = await fetch("http://localhost:9999/api");

  if (response.ok) {
    const users = await response.json();
    const user = users.users.find((user: any) => user.id === id);

    console.log(user);
    if (!user || user.pw !== pw) {
      console.log("로그인 실패");
      throw new Error("로그인 일치 정보 없음");
    }
    return user;
  }
  throw new Error("서버 통신 에러");
};

function* login(action: ReturnType<typeof loginRequestAction>) {
  try {
    console.log("saga/login");
    yield put({ type: LOGIN_SUCCESS });
    localStorage.setItem("login", JSON.stringify(action.data));
  } catch (error: unknown) {
    console.log("saga/loginfail");
    yield put({ type: LOGIN_FAIL });
  }
}

// saga 합치기
function* watchLogin() {
  //EventListener
  console.log("saga/ login 감시 시작");
  yield takeEvery(LOGIN_REQUEST, login);
  //takeLastest => 액션 모니터링 함수, 특정 액션 타입의 가장 마지막에 디스패치된 액션만 처리
  //takeEvery => 특정 액션 타입에 대하여 디스패치되는 모든 액션들을 처리
}

//all은 배열을 받아 이펙트를 '등록' ('실행'은 fork)
export default function* loginsaga() {
  yield all([fork(watchLogin)]);
}
