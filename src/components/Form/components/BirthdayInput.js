import dynamic from "next/dynamic";

import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

const DatePicker = dynamic(async () => await import("react-date-picker"), {
  ssr: false,
});

export default function BirthdayInput({ inputValue, handleChange, title }) {
  return (
    <div className="mb-3">
      <label htmlFor="date-picker-box" className="form-label">
        {title}
      </label>
      <div id="date-picker-box">
        <DatePicker
          onChange={(date) => handleChange("birthday", date)}
          value={inputValue}
        />
      </div>
    </div>
  );
}
