import AppForm from "./../../../../layout/form/AppForm";
import React, { useReducer } from "react";

const initialState = {
  gender: "",
  birthday: "",
  color: "",
  avatar: "",
};

const reducer = (state, action) => {
  switch (action.type) {
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

export default function EditUser() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (type, value) => {
    dispatch({ type, value });
  };
  return (
    <div className="container mt-5">
      <h3>Edit your user:</h3>
      <form className="row">
        <AppForm.GenderInput
          inputValue={state.gender}
          handleChange={handleChange}
          title="Gender"
        />
        <AppForm.ColorInput
          inputValue={state.color}
          handleChange={handleChange}
          title="Choose another UI color"
        />
        <AppForm.BirthdayInput
          inputValue={state.birthday}
          handleChange={handleChange}
          title="Change your birthday"
        />
        <AppForm.ImageInput
          inputValue={state.avatar}
          handleChange={handleChange}
          title="Change your avatar"
        />
      </form>
    </div>
  );
}
