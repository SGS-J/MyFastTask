import React from "react";

export default function PasswordInput({ inputValue, handleChange }) {
  return (
    <div className="mb-3">
      <label htmlFor="inputPassword" className="form-label">
        Password
      </label>
      <input
        name="password"
        type="password"
        className="form-control"
        id="inputPassword"
        onChange={(e) => handleChange(e.target.name, e.target.value)}
        value={inputValue}
      />
    </div>
  );
}
