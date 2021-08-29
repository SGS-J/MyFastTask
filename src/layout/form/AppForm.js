import EmailInput from "./components/EmailInput";
import PasswordInput from "./components/PasswordInput";
import GenderInput from "./components/GenderInput";
import BirthdayInput from "./components/BirthdayInput";
import ColorInput from "./components/ColorInput";
import ImageInput from "./components/ImageInput/ImageInput";
import LogInForm from "./components/LogInForm";
import SignUpForm from "./components/SignUpForm";

const AppForm = {
  disableInvalidFormDefault: function () {
    const forms = document.querySelectorAll(".needs-validation");
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  },
  LogInForm: function ({ email, password, handleChange }) {
    return (
      <LogInForm
        email={email}
        password={password}
        handleChange={handleChange}
      />
    );
  },
  SignUpForm: function ({
    email,
    password,
    gender,
    birthday,
    color,
    avatar,
    handleChange,
  }) {
    return (
      <SignUpForm
        email={email}
        password={password}
        gender={gender}
        birthday={birthday}
        color={color}
        avatar={avatar}
        handleChange={handleChange}
      />
    );
  },
  EmailInput: function ({ inputValue, handleChange }) {
    return <EmailInput inputValue={inputValue} handleChange={handleChange} />;
  },
  PasswordInput: function ({ inputValue, handleChange, type }) {
    return (
      <PasswordInput
        inputValue={inputValue}
        handleChange={handleChange}
        type={type}
      />
    );
  },
  GenderInput: function ({ inputValue, handleChange }) {
    return <GenderInput inputValue={inputValue} handleChange={handleChange} />;
  },
  BirthdayInput: function ({ inputValue, handleChange }) {
    return (
      <BirthdayInput inputValue={inputValue} handleChange={handleChange} />
    );
  },
  ColorInput: function ({ inputValue, handleChange }) {
    return <ColorInput inputValue={inputValue} handleChange={handleChange} />;
  },
  ImageInput: function ({ inputValue, handleChange }) {
    return <ImageInput inputValue={inputValue} handleChange={handleChange} />;
  },
};

export default AppForm;
