import { SET_EMPLOYEE_LIST } from "../constants/constants";

export const employeeData = (data = [], action) => {
  // console.log(action.data);
  switch (action.type) {
    case SET_EMPLOYEE_LIST:
      return [...action.data.employee];
    default:
      return data;
  }
};
