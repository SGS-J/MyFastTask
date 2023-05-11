import Image from "next/image";
import AvatarModal from "./components/AvatarModal";
import defaultAvatar from "@/public/default.png";

export default function ImageInput({ inputValue, handleChange, title }) {
  const handleClickAvatar = async () => {
    const { Modal } = await import("bootstrap");
    const dialogModal = Modal.getOrCreateInstance("#avatar-edit-modal");
    dialogModal.toggle();
  };

  return (
    <>
      <AvatarModal
        defaultAvatar={defaultAvatar}
        avatar={defaultAvatar === inputValue ? "" : inputValue}
        handleChange={handleChange}
      />
      <div className="mt-3">
        <label htmlFor="avatar-input">{title}</label>
        <div id="avatar-input" onClick={handleClickAvatar}>
          <div className="icon-edit-wrapper">
            <i className="fas fa-edit"></i>
          </div>
          <Image src={inputValue} alt="Avatar" fill />
        </div>
      </div>
    </>
  );
}
