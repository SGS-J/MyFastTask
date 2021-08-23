import React from "react";

export default function EmailInput({ inputValue, handleChange }) {
  return (
    <div className="mb-3">
      <label htmlFor="inputEmail" className="form-label">
        Email address
      </label>
      <input
        name="email"
        type="email"
        className="form-control"
        id="inputEmail"
        aria-describedby="emailHelp"
        value={inputValue}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      />
      <div id="emailHelp" className="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
  );
}
