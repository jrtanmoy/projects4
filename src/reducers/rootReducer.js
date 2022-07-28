import { combineReducers } from "redux";
import authReducer from "./authReducer";
// import { routerReducer } from "react-router-redux";
// import authReducer from "./authReducer";
import { reducer as formReducer } from "redux-form";
import { employeeData } from "./employeeReducer";
import employeePostReducer from "./employeePostReducer";

const appReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
  employee: employeeData,
  data: employeePostReducer,
});

export default appReducer;
