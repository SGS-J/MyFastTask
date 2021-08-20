import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function BirthdayInput() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="mb-3">
      <label htmlFor="date-picker-box" className="form-label">
        Your birthday was...
      </label>
      <div id="date-picker-box">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
    </div>
  );
}
