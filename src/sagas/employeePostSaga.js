import { takeLatest, put, call } from "redux-saga/effects";
import {
  createUserSuccess,
  createUserError,
} from "../actions/employeePostAction";
import { createUserApi } from "../service/api";

import { CREATE_USER_START } from "../constants/constants";
import { toast } from "react-toastify";

function* onCreateUserStartAsync({ payload }) {
  try {
    const response = yield call(createUserApi, payload);
    console.log("responseCreate", response);
    if (response.status === 200) {
      yield put(createUserSuccess(response.data));
      toast.success("Employee Added Successfully");
    }
  } catch (error) {
    yield put(createUserError(error));
  }
}

export function* onCreateUser() {
  yield takeLatest(CREATE_USER_START, onCreateUserStartAsync);
}

export default onCreateUser;
