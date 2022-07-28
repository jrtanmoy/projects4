import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import HomeContainer from "containers/Home/homeContainer";
import Auth from "containers/Auth";
// import { interceptor } from "utils/interceptor";
// import HomeContainer from "containers/Home/homeContainer";
import EmployeeTableContainer from "containers/EmployeeTable/EmployeeTableContainer";
import EmployeeRegisterFormContainer from "containers/employeeRegisterFormContainer/EmployeeRegisterFormContainer";

export default function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/employee" element={<EmployeeTableContainer />} />
        <Route path="/register/:id" element={<EmployeeRegisterFormContainer />} />
      </Routes>
    </Fragment>
  );
}
