import axios from "axios";
import { all, fork, delay, put, takeEvery, call } from "redux-saga/effects";
import API from "src/API";
import { GET_POST, GET_POST_SUCCESS, GET_POST_FAIL, getPost, getPostSuccess, getPostFail } from "./action";

export type PostAction =
  | ReturnType<typeof getPost>
  | ReturnType<typeof getPostSuccess>
  | ReturnType<typeof getPostFail>;
