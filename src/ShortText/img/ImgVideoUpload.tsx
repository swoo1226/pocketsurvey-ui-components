import React, { useCallback, useEffect, useState } from "react"
import styled from "styled-components"
import { useDropzone } from "react-dropzone"
import loadingSpinner from "../../Icon/svg/loadingSpinner.svg"
import { isValidFile } from "../../util/isValidFile"
import Button from "../../Button/Button"
const UploadWrapper = styled.div<{
  mediaSrc?: string | null;
  isDragActive: boolean;
}>`
  border: ${(p) => (p.mediaSrc ? "" : "2px dashed #DFDEDD")};
  border: ${(p) => (p.isDragActive ? "2px dashed #FAC62D" : "")};
  border-radius: 5px;
  width: 655px;
  padding-bottom: 28px;
  .loadingSpinner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex-direction: column;
    padding-top: 30px;
    span {
      font-size: 14px;
      color: #818282;
      font-family: "Noto Sans CJK KR Regular";
      margin-top: 20px;
    }
    img {
      color: #fac62d;
      width: calc(1.7 * 14px);
      height: calc(1.2 * 14px);
      -webkit-animation: spin 1s linear infinite;
      -moz-animation: spin 1s linear infinite;
      animation: spin 1s linear infinite;
    }
    @-moz-keyframes spin {
      100% {
        -moz-transform: rotate(360deg);
      }
    }
    @-webkit-keyframes spin {
      100% {
        -webkit-transform: rotate(360deg);
      }
    }
    @keyframes spin {
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  }
`

const FileUploadLabel = styled.label`
  text-decoration: underline;
  color: #fac62d;
  cursor: pointer;
`
const QRBox = styled.div`
  width: 126px;
  height: 126px;
  margin-top: 28px;
  display: inline-block;
  border: 1px dashed #dfdedd;

  .noQR {
    height: 100%;
    font-size: 16px;
    margin-top: 35%;
    height: 35%;
  }
`

const QRDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

const UploadText = styled.div`
  text-align: center;
  font-size: 14px;
  .limit {
    margin-top: 7px;
    color: #818282;
    font-size: 10px;
  }
`
const StressLetter = styled.span`
  font-family: "Noto Sans CJK KR Medium";
  color: #2b2e33;
  font-weight: 600;
`
const Sentence = styled.div`
  margin-top: 5px;
`
export type ImgVideoType = {
  onClick: () => void;
  qrCode: [string, string] | null;
  mediaSrc: string | null;
  type: "video" | "image";
  onUpload: () => void;
};

function ImgVideo({
  onClick,
  qrCode,
  mediaSrc,
  type,
  onUpload,
}: ImgVideoType): JSX.Element {
  const [isLoading, setLoading] = useState<boolean>(false)
  const [uploadedFile, setUploadedFile] = useState<string | null>("")
  const fileAcceptance =
    type === "image" ? "image/png, image/jpeg, image/jpg" : ".mp4"

  const uploadValidation = (file: File) => {
    const fileName = file.name
    if (isValidFile(fileName, fileAcceptance)) {
      setLoading(true)
      onUpload()
    } else {
      setLoading(false)
      window.alert(
        `다음 확장자만 업로드가 가능합니다.\n${fileAcceptance
          .replace(/\./g, "")
          .replace(/image\//gi, "")}`
      )
    }
  }

  useEffect(() => {
    setUploadedFile(mediaSrc)
  }, [mediaSrc])

  const onDrop = useCallback((acceptedFiles) => {
    uploadValidation(acceptedFiles[0])
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    noClick: true,
  })

  return (
    <UploadWrapper
      {...getRootProps()}
      mediaSrc={mediaSrc}
      isDragActive={isDragActive}
    >
      {isLoading ? (
        <div className="loadingSpinner">
          <img alt="loading" src={loadingSpinner} />
          <span> 파일을 업로드중입니다...</span>
        </div>
      ) : mediaSrc ? (
        <>
          {type === "image" ? (
            // @ts-ignore
            <img
              src={uploadedFile}
              style={{ width: "300px" }}
              alt="imageNull"
            />
          ) : (
            // @ts-ignore
            <video src={uploadedFile} controls />
          )}
          <Button theme="primary" onClick={onClick} disabled={false}>
            {" "}
            삭제{" "}
          </Button>
        </>
      ) : (
        <UploadText>
          <QRDiv>
            <QRBox>
              {!qrCode ? (
                <div className="noQR">
                  {" "}
                  QR 코드가 <br />
                  준비중입니다
                </div>
              ) : (
                <img
                  src={`data:image/png;base64, ${qrCode}`}
                  style={{ width: "100%" }}
                  alt="QR Null"
                />
              )}
            </QRBox>
          </QRDiv>
          <Sentence>
            <StressLetter>QR 코드를 스캔</StressLetter>
            하고 휴대폰에서 바로 올리기
            <br />
          </Sentence>
          <Sentence>
            또는
            <StressLetter> 여기에 파일을 끌어서 놓기 </StressLetter>
            또는
            <FileUploadLabel>
              <span> 브라우저에서 </span>
              <input
                {...getInputProps()}
                className="fileBtn"
                type="file"
                accept={fileAcceptance}
                style={{ display: "none" }}
                onChange={(e) => {
                  uploadValidation(e.target.files![0])
                }}
              />
            </FileUploadLabel>
            <span>올리기</span>
          </Sentence>
          <div className="limit">최대 10MB 가능</div>
        </UploadText>
      )}
    </UploadWrapper>
  )
}

export default ImgVideo
