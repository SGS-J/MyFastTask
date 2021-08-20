import EmailInput from "./components/EmailInput";
import PasswordInput from "./components/PasswordInput";
import GenderInput from "./components/GenderInput";
import BirthdayInput from "./components/BirthdayInput";
import ColorInput from "./components/ColorInput";
import ImageInput from "./components/ImageInput";

const AppForm = {
  EmailInput: function () {
    return <EmailInput />;
  },
  PasswordInput: function () {
    return <PasswordInput />;
  },
  GenderInput: function () {
    return <GenderInput />;
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
