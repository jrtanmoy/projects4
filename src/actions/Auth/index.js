import { LOGIN, SET_LOGIN_DATA } from "./actionTypes";

// export const getList = () => ({
//   type: GET_LIST,
// });

// export const getListSuccess = (data) => ({
//   type: GET_LIST_SUCCESS,
//   payload: data,
// });

// export const getListFailure = () => ({
//   type: GET_LIST_FAILURE,
// });

export const login = (data) => ({
  type: LOGIN,
  payload: data,
});

export const setlogindata = (data) => ({
  type: SET_LOGIN_DATA,
  payload: data,
});
