import axios from "axios";
import { APIGenerator } from "src/@types/types";
import { all, fork, put, takeEvery, call } from "redux-saga/effects";
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

// const LoginAPI = async (data: { id: string; pw: string }) => {
//   const { id, pw } = data;
//   const response = await fetch("http://localhost:9999/api");

//   if (response.ok) {
//     const users = await response.json();
//     const user = users.users.find((user: any) => user.id === id);

//     console.log(user);
//     if (!user || user.pw !== pw) {
//       console.log("로그인 실패");
//       throw new Error("로그인 일치 정보 없음");
//     }
//     return user;
//   }
//   throw new Error("서버 통신 에러");
// };

// export const LoginAPI = async (data: { id: string; pw: string }) => {
//   const { id, pw } = data;
//   const res = await fetch("http://localhost:9999/api");
//   const getData = await res.json();
//   // const dataSet = JSON.parse(data);
//   // console.log(dataSet);
//   if (res.ok) {
//     const user = getData.users.find((user: any) => user.users.id === id);
//     console.log(user);
//     if (!user || user.pw !== pw) {
//       console.log("로그인 실패");
//     }
//     return user;
//   }
// };
export const LoginAPI = (data: { id: string; pw: string }) => {
  const { id, pw } = data;
  return axios
    .post("http://localhost:9999/api")
    .then((res) => {
      console.log(res);
      const users = res.data;
      console.log(res.data);
      const data = users.users.find((user: any) => user.id === id);
      return data;
    })
    .catch((error) => {
      console.log(error + "로그인 실패");
    });
  // console.log(data);
  // return axios.post("http://localhost:9999/api", data);
};

// function* login(action: ReturnType<typeof loginRequestAction>) {
//   try {
//     console.log("saga/login");
//     const result: APIGenerator = yield call(LoginAPI, action.data);
//     const { data } = result;
//     console.log(result);
//     yield put(
//       loginSuccessAction({
//         id: data.users.id,
//       }),
//     );
//     localStorage.setItem("login", JSON.stringify(action.data));
//   } catch (error: unknown) {
//     console.log("saga/loginfail");
//     yield put(loginFailAction(error));
//   }
// }
type User = {
  user: [
    {
      id: string;
      pw: string;
    },
  ];
};
function* login(action: ReturnType<typeof loginRequestAction>) {
  try {
    const id = action.data.id;
    const pw = action.data.pw;
    const result: User = yield call(LoginAPI, action.data);
    console.log(result);
    console.log("saga/loginSuccess");
    yield put(loginSuccessAction({ id, pw }));
    localStorage.setItem("login", JSON.stringify(action.data));
  } catch (error: unknown) {
    console.log("saga/loginfail");
    yield put(loginFailAction(error));
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
