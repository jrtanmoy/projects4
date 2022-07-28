import { LOGIN } from "actions/Auth/actionTypes";

const initialState = {
  loading: false,
  loggeduser: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: false,
        loggeduser: action.payload,
      };
  }
  return state;
};

export default authReducer;
