import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { AvatarContext } from "./AvatarContext";
import AvatarModal from "./components/AvatarModal";
import { Modal } from "bootstrap";

export default function ImageInput() {
  const avatar = useContext(AvatarContext);
  const handleClickAvatar = () => {
    const avatarModal = Modal.getOrCreateInstance(
      document.getElementById("avatar-edit-modal")
    );
    avatarModal.toggle();
  };

  return (
    <AvatarContext.Provider>
      {ReactDOM.createPortal(<AvatarModal />, document.getElementById("root"))}
      <div className="mt-3" onClick={handleClickAvatar}>
        <label htmlFor="avatar-input">Avatar</label>
        <div id="avatar-input">
          <div className="icon-edit-wrapper">
            <i className="fas fa-edit"></i>
          </div>
          <img src={avatar} alt="Avatar" />
        </div>
      </div>
    </AvatarContext.Provider>
  );
}
