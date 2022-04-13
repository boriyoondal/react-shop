import { all, fork } from "redux-saga/effects";
import loginsaga from "./saga";

export default function* rootsaga() {
  yield all([fork(loginsaga)]);
}
