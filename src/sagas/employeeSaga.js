import { takeEvery, put } from "redux-saga/effects";
import { EMPLOYEE_LIST, SET_EMPLOYEE_LIST } from "../constants/constants";

function* getEmployee() {
  let data = yield fetch("/admin/employees");
  data = yield data.json();
  console.log(data);
  yield put({ type: SET_EMPLOYEE_LIST, data });
}

function* employeeSaga() {
  yield takeEvery(EMPLOYEE_LIST, getEmployee);
}

export default employeeSaga;
