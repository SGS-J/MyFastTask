import React, { useReducer, useEffect } from "react";
import AppForm from "./../../../layout/form/AppForm";

const initialState = {
  email: "",
  password: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "email":
      return { ...state, email: action.value };
    case "password":
      return { ...state, password: action.value };
    default:
      throw new Error();
  }
};

export default function LogInForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (type, value) => {
    dispatch({ type, value });
  };

  useEffect(() => {
    AppForm.disableInvalidFormDefault();
  }, []);

  return (
    <form className="bg-white rounded-1 shadow col-11 col-md-6 col-lg-4 my-5 p-5">
      <h1 className="mb-3">LOG IN</h1>
      <AppForm.EmailInput
        inputValue={state.email}
        handleChange={handleChange}
      />
      <AppForm.PasswordInput
        inputValue={state.password}
        handleChange={handleChange}
        type="normal"
      />
      <button type="submit" className="btn btn-danger display-inline-block">
        Enter
      </button>
      <div className="mt-3">
        <span>Don't have an account yet? </span>
        <a href="/register">Create now!</a>
      </div>
    </form>
  );
}
