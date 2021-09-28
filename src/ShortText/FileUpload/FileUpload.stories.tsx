import React, { useCallback } from "react";
import styled, { createGlobalStyle } from "styled-components";
import FileUpload from "./FileUpload";
import { Meta } from "@storybook/react/types-6-0";
import { boolean, withKnobs } from "@storybook/addon-knobs";
// import { useDropzone } from 'react-dropzone';

// const Container = styled.div``;
// const UploadWrapper = styled.div`
//     /* border: ${(p) => (p.answeredText ? "" : "2px dashed #DFDEDD")};
//     border: ${(p) => (p.isDragActive ? "2px dashed #FAC62D" : "")}; */
//     border: 2px dashed #DFDEDD;
//     border-radius: 5px;
//     width: 655px;
//     padding-bottom: 28px;
//     .loadingSpinner {
//       width: 100%;
//       height: 60px;
//       margin-top: 28px;
//       flex-direction: column;
//       span {
//         font-size: 14px;
//         color: #818282;
//         font-family: 'Noto Sans CJK KR Regular';
//       }
//     }
//     .deleteBtn {
//       margin-top: 20px;
//     }
  
//     .file-icon {
//       width: 126px;
//       height: 126px;
//       margin-top: 28px;
//       background-color: #818282;
//     }
//     .file-size-text {
//       margin-top: 7px;
//       font-size: 10px;
//     }
//     @media only screen and (max-width: 743px) {
//       width: 100%;
//       border: 0px;
  
//       .loadingSpinner {
//         padding-bottom: 20px;
//       }
//     }
//   `;

export default {
  component: FileUpload,
  title: "Components/FileUpload",
} as Meta;

// const onDrop = useCallback((acceptedFiles) => {
//     const fileName = acceptedFiles[0].name;

//     // if (validationFileExtension(fileName, subType)) {
//     //   setLoading(true);
//     //   uploadFile({
//     //     file: acceptedFiles[0],
//     //     questionIndex,
//     //   });
//     // } else {
//     //   setLoading(false);
//     //   window.alert(
//     //     `다음 확장자만 업로드가 가능합니다.\n${switchAccept(subType)
//     //       .replace(/\./g, '')
//     //       .replace(/image\//gi, '')}`,
//     //   );
//     // }
//   }, []);

// const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     noClick: true,
//   });

export function Index() {
  const loading = boolean("loading", false);
  const qrCode = [];
  const id = "example-id";

  return (
    <>
      <h1>FileUpload</h1>
      <FileUpload loading={false} qrCode={qrCode} id={id} />
    </>
  );
}
