import React, { useReducer } from "react";
import AppForm from "./../../layout/form/AppForm";
import DefaultAvatar from "./../../assets/default.png";

const initialState = {
  email: "",
  password: "",
  "confirm-password": "",
  gender: "",
  birthday: new Date(),
  color: "#B80000",
  avatar: DefaultAvatar,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "email":
      return { ...state, email: action.value };
    case "password":
      return { ...state, password: action.value };
    case "confirm-password":
      return { ...state, "confirm-password": action.value };
    case "gender":
      return { ...state, gender: action.value };
    case "birthday":
      return { ...state, birthday: action.value };
    case "color":
      return { ...state, color: action.value };
    case "avatar":
      return { ...state, avatar: action.value };

    default:
      throw new Error();
  }
};

export default function RegisterPage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (type, value) => {
    dispatch({ type, value });
  };

  return (
    <main className="row justify-content-center form-page-main">
      <AppForm.SignUpForm />
    </main>
  );
}
