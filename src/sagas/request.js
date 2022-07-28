export const loginUserRequest = (data) => {
  const dataGot = {
    email: data.payload.email,
    password: data.payload.password,
  };
  const stringifiedData = JSON.stringify(dataGot);

  return fetch("/employee/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: stringifiedData,
  });
};
