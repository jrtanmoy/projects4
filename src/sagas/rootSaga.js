import { all } from "redux-saga/effects";
import authSagas from "./authSagas";
import onCreateUser from "./employeePostSaga";
import employeeSaga from "./employeeSaga";

export default function* rootSaga() {
  yield all([authSagas(), employeeSaga(), onCreateUser()]);
}
