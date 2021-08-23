import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function BirthdayInput() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="mb-3">
      <label htmlFor="date-picker-box" className="form-label">
        Your birthday:
      </label>
      <div id="date-picker-box">
        <DatePicker selected={date} onChange={(date) => setDate(date)} />
      </div>
    </div>
  );
}
