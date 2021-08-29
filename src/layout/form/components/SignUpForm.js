import React, { useEffect } from "react";
import AppForm from "../AppForm";

export default function SignUpForm({
  email,
  password,
  gender,
  birthday,
  color,
  avatar,
  handleChange,
}) {
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
          inputValue={email}
          handleChange={() => handleChange("email", email)}
        />
        <AppForm.PasswordInput
          inputValue={password}
          handleChange={() => handleChange("password", password)}
          type="normal"
        />
        <AppForm.PasswordInput
          inputValue={password}
          handleChange={() => handleChange("confirm-password", password)}
          type="confirm"
        />
        <AppForm.GenderInput
          inputValue={gender}
          handleChange={() => handleChange("gender", gender)}
        />
      </div>
      <div className="col-12 col-lg-6">
        <AppForm.ImageInput
          inputValue={avatar}
          handleChange={() => handleChange("avatar", avatar)}
        />
        <AppForm.ColorInput
          inputValue={color}
          handleChange={() => handleChange("color", color)}
        />
        <AppForm.BirthdayInput
          inputValue={birthday}
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
