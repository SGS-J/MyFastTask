import { useEffect, useReducer } from "react";
import Form from "./Form";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (type, value) => {
    dispatch({ type, value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/user/login", {
        method: "POST",
        body: JSON.stringify(state),
        headers: {
          "Content-Type": "application/json",
        },
      });
      router.push(res.url);
    } catch (err) {
      alert("Incorrect user or password!");
    }
  };

  Form.disableInvalidFormDefault();

  return (
    <main className="row justify-content-center align-items-center form-page-main">
      <form
        className="bg-white rounded-1 shadow col-11 col-md-6 col-lg-4 my-5 p-5"
        onSubmit={handleSubmit}
      >
        <h1 className="mb-3">LOG IN</h1>
        <Form.EmailInput
          title="Email Address"
          inputValue={state.email}
          handleChange={handleChange}
        />
        <Form.PasswordInput
          inputValue={state.password}
          handleChange={handleChange}
          type="normal"
        />
        <input
          type="submit"
          value="Enter"
          className="btn btn-danger display-inline-block"
        />
        <div className="mt-3">
          <span>Don't have an account yet? </span>
          <a href="/user/register">Create now!</a>
        </div>
      </form>
    </main>
  );
}
