import React, { useState, useReducer } from "react";
import AppForm from "./../../../layout/form/AppForm";
import DefaultAvatar from "./../../../assets/default.png";

const initialState = {
  email: "",
  password: "",
  gender: "",
  birthday: new Date(),
  color: "red",
  avatar: DefaultAvatar,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "email":
      return { ...state, email: action.value };
    case "password":
      return { ...state, password: action.value };
    case "gender":
      return { ...state, gender: action.value };
    case "birthday":
      return;
    case "color":
      return;
    case "avatar":
      return;

    default:
      throw new Error();
  }
};

export default function SignUpForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (e) => {
    dispatch({ type: e.target.name, value: e.target.value });
  };

  return (
    <form className="row">
      <div className="col-12 col-md-6">
        <AppForm.EmailInput
          inputValue={state.email}
          handleChange={handleChange}
        />
        <AppForm.PasswordInput
          inputValue={state.password}
          handleChange={handleChange}
        />
        <AppForm.GenderInput
          inputValue={state.gender}
          handleChange={handleChange}
        />
        <AppForm.BirthdayInput />
      </div>
      <div className="col-12 col-md-6">
        <AppForm.ImageInput />
      </div>

      <button type="submit" className="btn btn-primary col-6 col-md-2">
        Submit
      </button>
    </form>
  );
}
