import { all, fork } from "redux-saga/effects";
import loginsaga from "./login/saga";

export default function* rootsaga() {
  yield all([fork(loginsaga)]);
}
