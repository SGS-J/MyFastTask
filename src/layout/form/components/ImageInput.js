import React, { useState } from "react";
import Avatar from "react-avatar-edit";

export default function ImageInput() {
  const [src, setSrc] = useState("");
  const [preview, setPreview] = useState(null);

  const onClose = () => {
    setPreview(null);
  };

  const onCrop = (preview) => {
    setPreview(preview);
  };

  const onBeforeFileLoad = (elem) => {
    if (elem.target.files[0].size > 71680) {
      alert("File is too big!");
      elem.target.value = "";
    }
  };

  return (
    <div class="mb-3">
      <Avatar
        width={300}
        height={150}
        onCrop={onCrop}
        onClose={onClose}
        onBeforeFileLoad={onBeforeFileLoad}
        src={src}
      />
      <img src={preview} alt="Preview" />
    </div>
  );
}
