import EmailInput from "./components/EmailInput";
import PasswordInput from "./components/PasswordInput";
import GenderInput from "./components/GenderInput";
import BirthdayInput from "./components/BirthdayInput";
import ColorInput from "./components/ColorInput";
import ImageInput from "./components/ImageInput/ImageInput";

const AppForm = {
  EmailInput: function ({ inputValue, handleChange }) {
    return <EmailInput inputValue={inputValue} handleChange={handleChange} />;
  },
  PasswordInput: function ({ inputValue, handleChange }) {
    return (
      <PasswordInput inputValue={inputValue} handleChange={handleChange} />
    );
  },
  GenderInput: function ({ inputValue, handleChange }) {
    return <GenderInput inputValue={inputValue} handleChange={handleChange} />;
  },
  BirthdayInput: function () {
    return <BirthdayInput />;
  },
  ColorInput: function () {
    return <ColorInput />;
  },
  ImageInput: function () {
    return <ImageInput />;
  },
};

export default AppForm;
