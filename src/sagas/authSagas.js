import { all, call, put, takeLatest } from "redux-saga/effects";
import { SET_LOGIN_DATA } from "actions/Auth/actionTypes";
import { login } from "actions/Auth";
import { loginUserRequest } from "./request";
// import { GET_LIST } from "actions/Auth/actionTypes";
// import { getListSuccess, getListFailure } from "actions/Auth";
// import { getRequest } from "./request";
// import { pushNotification } from "utils/notifications";
// import URls from "constants/urls";

function* handlelogin(action) {
  try {
    const response = yield call(loginUserRequest, action);
    const data = yield response.json();
    if (data) {
      yield put(login(data));
    }
  } catch (error) {
    console.log(error);
  }
}

function* watchGetRequest() {
  yield takeLatest(SET_LOGIN_DATA, handlelogin);
}

export default function* sagas() {
  yield all([watchGetRequest()]);
}
