import AppForm from "./../../../../layout/form/AppForm";
import React, { useReducer } from "react";

const initialState = {};

const reducer = (state, action) => {
  switch (action.type) {
    case "email":
      return { ...state, email: action.value };
    default:
      throw new Error();
  }
};

export default function EditUser() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = () => {};
  return (
    <form action="">
      <AppForm.EmailInput
        inputValue={state.email}
        handleChange={handleChange}
      />
    </form>
  );
}
