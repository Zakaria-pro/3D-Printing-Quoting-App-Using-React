import React, { useCallback, useMemo, useState } from "react";

import { Icon } from "@iconify/react";

import { useDropzone } from "react-dropzone";

const baseStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#2196f3",
  borderStyle: "dashed",
  backgroundColor: "#4187e333",
  Width: "992",
  marginLeft: "auto",
  marginRight: "auto",
  color: "#000000AA",
  transition: "border .3s ease-in-out",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#2196f3",
  backgroundColor: "#4187e366",
  borderStyle: "solid",
  transition: "border .3s ease-in-out",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

function DropzoneComponent(props) {
  const [textUpload, setTextUpload] = useState("Drag & Drop to Upload File");
  const [loadScreen, setLoadScreen] = useState(false);
  const [fileName, setFileName] = useState("fileName");

  const onDrop = useCallback((acceptedFiles) => {
    setLoadScreen(true);
    console.log(acceptedFiles);
    let uploadedFile = acceptedFiles[0];
    props.fileUpload(uploadedFile);
    setFileName(uploadedFile.name);
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: "image/jpeg, image/png",
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle & setTextUpload("Release your File") : {}),
      ...(!isDragActive ? setTextUpload("Drag & Drop to Upload File") : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  return (
    <div>
      <div {...getRootProps({ style })}>
        <div>
          <input {...getInputProps()} />

          <div className="items-upload">
            <Icon icon="akar-icons:cloud-upload" color="#4188e3" width={40} />
            <h3>{textUpload}</h3>
            <span>OR</span>

            <button>Browse File</button>
          </div>
        </div>

        {/* {loadScreen && (
          <div>
            <Icon icon="eos-icons:bubble-loading" color="#4188e3" width={40} />
            <h3>Processing of your quote ...</h3>
            <p>Uploaded File: {fileName}</p>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default DropzoneComponent;
