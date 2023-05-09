import { createPortal } from "react-dom";
import { Modal } from "bootstrap";
import AvatarModal from "./components/AvatarModal";
import defaultAvatar from "@/public/default.png";

export default function ImageInput({ inputValue, handleChange, title }) {
  const handleClickAvatar = () => {
    const avatarModal = Modal.getOrCreateInstance(
      document.getElementById("avatar-edit-modal")
    );
    avatarModal.toggle();
  };

  return (
    <>
      {createPortal(
        <AvatarModal
          defaultAvatar={defaultAvatar}
          avatar={defaultAvatar === inputValue ? "" : inputValue}
          handleChange={handleChange}
        />,
        document.body
      )}
      <div className="mt-3">
        <label htmlFor="avatar-input">{title}</label>
        <div id="avatar-input" onClick={handleClickAvatar}>
          <div className="icon-edit-wrapper">
            <i className="fas fa-edit"></i>
          </div>
          <img src={inputValue} alt="Avatar" />
        </div>
      </div>
    </>
  );
}
