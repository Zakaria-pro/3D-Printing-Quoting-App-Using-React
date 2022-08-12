import React from "react";

import { Icon } from "@iconify/react";

import "./NewQuote.css";
import DropzoneComponent from "./DropZone";

const NewQuote = (props) => {
  const fileUploadHandeler = (file) => {
    const uploadedFile = file;
    props.fileUpload(uploadedFile);
  };

  return (
    <div className="drag-area">
      <DropzoneComponent fileUpload={fileUploadHandeler} />
    </div>
  );
};

export default NewQuote;
