import React, { useState, useCallback } from "react"
import styled from "styled-components"
import { useDropzone } from "react-dropzone"
import Icon from "../../Icon/Icon"

const Container = styled.div``
const UploadWrapper = styled.div`
  border: 2px dashed #dfdedd;
  border-radius: 5px;
  width: 655px;
  padding-bottom: 28px;
  .loadingSpinner {
    width: 100%;
    height: 60px;
    margin-top: 28px;
    flex-direction: column;
    span {
      font-size: 14px;
      color: #818282;
      font-family: "Noto Sans CJK KR Regular";
    }
  }
  .deleteBtn {
    margin-top: 20px;
  }

  .file-icon {
    width: 126px;
    height: 126px;
    margin-top: 28px;
    background-color: #818282;
  }
  .file-size-text {
    margin-top: 7px;
    font-size: 10px;
  }
  @media only screen and (max-width: 743px) {
    width: 100%;
    border: 0px;

    .loadingSpinner {
      padding-bottom: 20px;
    }
  }
`

const BeforeUpload = styled.div``

const QRBox = styled.div``

const UploadText = styled.div`
  margin-top: 7px;
  text-align: center;
  font-size: 14px;
  font-family: "Noto Sans CJK KR Regular";
  color: #818282;
  line-height: 23.8px;
`

const StressLetter = styled.span`
  font-family: "Noto Sans CJK KR Medium";
  color: #2b2e33;
`

const FileUploadLabel = styled.label`
  text-decoration: underline;
  color: #fac62d;
  cursor: pointer;
`

const FileUploadIcon = styled.div`
  text-align: center;
  padding-top: 28px;
`

export type FileUploadTypes = {
  loading: boolean;
  qrCode: [string, string][] | [];
  id: string;
  answeredText: string | null;
  questionIndex: number;
};

function FileUpload({
  loading,
  qrCode,
  id,
  answeredText,
  questionIndex,
}: FileUploadTypes): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  console.log(loading, qrCode, id)
  const onDrop = useCallback((acceptedFiles) => {
    // if (validationFileExtension(fileName, subType)) {
    //   setLoading(true);
    //   uploadFile({
    //     file: acceptedFiles[0],
    //     questionIndex,
    //   });
    // } else {
    //   setLoading(false);
    //   window.alert(
    //     `다음 확장자만 업로드가 가능합니다.\n${switchAccept(subType)
    //       .replace(/\./g, '')
    //       .replace(/image\//gi, '')}`,
    //   );
    // }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    noClick: true,
  })
  const fileAcceptance =
    ".pdf,.doc,.docx,.hwp,.xls,.xlsx,.ppt,.pptx,.zip,.alz,.rar,.7z"

  const validationFileExtension = (fileName: string) => {
    const extension = fileName.substring(
      fileName.lastIndexOf(".") + 1,
      fileName.length
    )
    const accept = fileAcceptance.replace(/\./gi, "").split(",")
    if (accept.includes(extension)) {
      return true
    }
    return false
  }

  return (
    <>
      <UploadWrapper
        {...getRootProps()}
        answeredText="Example"
        isDragActive={isDragActive}
      >
        {loading ? (
          <BeforeUpload>
            <QRBox>
              {qrCode !== [] ? (
                <img
                  src={`data:image/png;base64, ${qrCode[1]}`}
                  style={{ width: "100%" }}
                  alt="alt"
                />
              ) : (
                <div className="noQR">
                  {" "}
                  QR 코드가 <br />
                  준비중입니다
                </div>
              )}
            </QRBox>
          </BeforeUpload>
        ) : (
          <FileUploadIcon>
            <Icon icon="fileUpload" width={97.42} color="#FAC62D" />
          </FileUploadIcon>
        )}
        <UploadText>
          <StressLetter> 여기에 파일을 끌어서 놓기</StressLetter> 또는
          <FileUploadLabel htmlFor={`fileUpload-${questionIndex}`}>
            <span> 브라우저에서</span>
            <input
              {...getInputProps()}
              className="fileBtn"
              type="file"
              id={`fileUpload-${questionIndex}`}
              accept={fileAcceptance}
              style={{ display: "none" }}
              onChange={(e) => {
                const fileName = e.target.files![0].name
                const accept = fileAcceptance.replace(/\./gi, "").split(",")
                if (validationFileExtension(fileName)) {
                  loading = true
                } else {
                  setIsLoading(false)
                  window.alert(
                    `다음 확장자만 업로드가 가능합니다.\n${fileAcceptance
                      .replace(/\./g, "")
                      .replace(/image\//gi, "")}`
                  )
                }
              }}
            />
          </FileUploadLabel>
          <span> 올리기</span>
          <div className="file-size-text">최대 50MB 가능</div>
        </UploadText>
      </UploadWrapper>
    </>
  )
}

export default FileUpload
