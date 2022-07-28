import {
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
} from "../constants/constants";

const initialState = {
  users: [],
  user: {},
  loading: false,
};

const employeePostReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_START:
      return {
        ...state,
        loading: true,
      };
    case CREATE_USER_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default employeePostReducer;
