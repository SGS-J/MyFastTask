import React from "react";
import AppForm from "./../../../layout/form/AppForm";

export default function SignUpForm() {
  return (
    <form className="row">
      <div className="col-12 col-md-6">
        <AppForm.EmailInput />
        <AppForm.PasswordInput />
        <AppForm.GenderInput />
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
