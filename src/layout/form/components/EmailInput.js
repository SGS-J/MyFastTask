import React from "react";

export default function EmailInput() {
  return (
    <div className="mb-3">
      <label htmlFor="inputEmail" className="form-label">
        Email address
      </label>
      <input
        type="email"
        className="form-control"
        id="inputEmail"
        aria-describedby="emailHelp"
      />
      <div id="emailHelp" className="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
  );
}
