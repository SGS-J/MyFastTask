import React from "react";

export default function PasswordInput() {
  return (
    <div className="mb-3">
      <label htmlFor="inputPassword" className="form-label">
        Password
      </label>
      <input type="password" className="form-control" id="inputPassword" />
    </div>
  );
}
