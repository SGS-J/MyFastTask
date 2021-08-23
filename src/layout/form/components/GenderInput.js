import React from "react";

export default function GenderInput({ inputValue, handleChange }) {
  return (
    <div className="mb-3">
      <label htmlFor="form-check-box" className="form-label">
        Gender
      </label>
      <div id="form-check-box" className="container">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="inlineRadio1"
            value="male"
            checked={inputValue === "male"}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
          <label className="form-check-label" htmlFor="inlineRadio1">
            Male
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="inlineRadio2"
            value="female"
            checked={inputValue === "female"}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="inlineRadio2">
            Female
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="inlineRadio3"
            value="unknown"
            checked={inputValue === "unknown"}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="inlineRadio3">
            I'd prefer not to say
          </label>
        </div>
      </div>
    </div>
  );
}
