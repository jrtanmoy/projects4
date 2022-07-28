import {
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
} from "../constants/constants";

export const createUserStart = (user) => ({
  type: CREATE_USER_START,
  payload: user,
});

export const createUserSuccess = (users) => ({
  type: CREATE_USER_SUCCESS,
  payload: users,
});

export const createUserError = (error) => ({
  type: CREATE_USER_ERROR,
  payload: error,
});
