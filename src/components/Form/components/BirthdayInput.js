import DatePicker from "react-date-picker";

import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

export default function BirthdayInput({ inputValue, handleChange, title }) {
  return (
    <div className="mb-3">
      <label htmlFor="date-picker-box" className="form-label">
        {title}
      </label>
      <div id="date-picker-box">
        <DatePicker onChange={(date) => handleChange("birthday", date)} />
      </div>
    </div>
  );
}
