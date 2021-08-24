import React, { useReducer, useEffect } from "react";
import AppForm from "./../../../layout/form/AppForm";
import DefaultAvatar from "./../../../assets/default.png";

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

export default function SignUpForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (type, value) => {
    dispatch({ type, value });
  };

  useEffect(() => {
    AppForm.disableInvalidFormDefault();
  }, []);

  return (
    <form
      className="needs-validation row container bg-white rounded-1 shadow col-11 col-lg-6 my-5 p-5"
      noValidate
    >
      <h1 className="col-12 mb-3">REGISTER</h1>
      <div className="col-12 col-lg-6">
        <AppForm.EmailInput
          inputValue={state.email}
          handleChange={handleChange}
        />
        <AppForm.PasswordInput
          inputValue={state.password}
          handleChange={handleChange}
          type="normal"
        />
        <AppForm.PasswordInput
          inputValue={state.password}
          handleChange={handleChange}
          type="confirm"
        />
        <AppForm.GenderInput
          inputValue={state.gender}
          handleChange={handleChange}
        />
      </div>
      <div className="col-12 col-lg-6">
        <AppForm.ImageInput
          inputValue={state.avatar}
          handleChange={handleChange}
        />
        <AppForm.ColorInput
          inputValue={state.color}
          handleChange={handleChange}
        />
        <AppForm.BirthdayInput
          inputValue={state.birthday}
          handleChange={handleChange}
        />
      </div>

      <div className="col-6 col-lg-2">
        <button type="submit" className="btn btn-danger">
          Submit
        </button>
      </div>
    </form>
  );
}
