import EmailInput from "./components/EmailInput";
import PasswordInput from "./components/PasswordInput";
import GenderInput from "./components/GenderInput";
import BirthdayInput from "./components/BirthdayInput";
import ColorInput from "./components/ColorInput";
import ImageInput from "./components/ImageInput/ImageInput";

const AppForm = {
  disableInvalidFormDefault: () => {
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
