import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { all, fork, put, takeEvery, call } from "redux-saga/effects";
import { loginRequest, loginSuccess, loginFail, logoutAction } from "./loginSlice";

export const LoginAPI = (data: { id: string; pw: string }) => {
  const { id, pw } = data;
  return axios
    .post("http://localhost:9999/api")
    .then((res) => {
      console.log(res);
      const users = res.data;
      console.log(users);
      const data = users.users.find((user: any) => user.id === id && user.pw === pw);
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.log(error + "API 접속 실패");
    });
};

type User = {
  id: string;
  pw: string;
};

function* login(action: PayloadAction<User>) {
  try {
    //action으로부터 id,pw data 값을 받고
    const id = action.payload.id;
    const pw = action.payload.pw;
    console.log(id, pw);
    const result: User = yield call(LoginAPI, action.payload);
    //API data와 data의 id,pw값의 일치확인
    if (result.id === id && result.pw === pw) {
      yield put(loginSuccess({ id, pw }));
      localStorage.setItem("login", JSON.stringify(action.payload));
      console.log("saga/loginSuccess");
    }
  } catch (error: unknown) {
    console.log("saga/loginfail");
    yield put(loginFail());
    alert("로그인 정보를 확인해주세요");
  }
}
// saga 합치기
function* watchLogin() {
  //EventListener의 역할
  console.log("saga/ login 감시 시작");
  yield takeEvery(loginRequest.type, login);
  //takeLastest => 액션 모니터링 함수, 특정 액션 타입의 가장 마지막에 디스패치된 액션만 처리
  //takeEvery => 특정 액션 타입에 대하여 디스패치되는 모든 액션들을 처리
}

//all은 배열을 받아 이펙트를 '등록' ('실행'은 fork)
export default function* loginsaga() {
  yield all([fork(watchLogin)]);
}
