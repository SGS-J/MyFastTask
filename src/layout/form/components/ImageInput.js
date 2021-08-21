import React, { useState } from "react";
import Avatar from "react-avatar-edit";
import DefaultAvatar from "./../../../assets/default.png";

export default function ImageInput() {
  const [src, setSrc] = useState("");
  const [preview, setPreview] = useState(DefaultAvatar);
  const [hasDefault, setHasDefault] = useState(true);

  const onClose = () => {
    setPreview(DefaultAvatar);
    setHasDefault(!hasDefault);
  };

  const onCrop = (preview) => {
    setPreview(preview);
  };

  const onBeforeFileLoad = (elem) => {
    if (elem.target.files[0].size > 71680) {
      alert("File is too big!");
      elem.target.value = "";
    } else {
      setHasDefault(!hasDefault);
    }
  };

  return (
    <div class="mb-3">
      <Avatar
        label="Choose your avatar"
        width={300}
        height={200}
        onCrop={onCrop}
        onClose={onClose}
        onBeforeFileLoad={onBeforeFileLoad}
        src={src}
      />
      <div className="mt-3">
        <label htmlFor="avatar-preview">Avatar</label>
        <div id="avatar-preview">
          <img
            src={preview}
            alt="Preview"
            className={hasDefault && "default-image"}
          />
        </div>
      </div>
    </div>
  );
}
