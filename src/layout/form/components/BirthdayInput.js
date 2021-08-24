import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function BirthdayInput({ inputValue, handleChange }) {
  return (
    <div className="mb-3">
      <label htmlFor="date-picker-box" className="form-label">
        Your birthday:
      </label>
      <div id="date-picker-box">
        <DatePicker
          selected={inputValue}
          onChange={(date) => handleChange("birthday", date)}
        />
      </div>
    </div>
  );
}
