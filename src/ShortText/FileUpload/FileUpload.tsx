import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useDropzone } from 'react-dropzone';
import Icon from '../../Icon/Icon';
import loadingSpinner from '../../Icon/svg/loadingSpinner.svg';
import { isValidFile } from '../../util/isValidFile';

const UploadWrapper = styled.div<{ answeredText: string | null }>`
  border: ${(props) => (props.answeredText ? '' : '2px dashed #dfdedd')};
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
      font-family: 'Noto Sans CJK KR Regular';
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
`;

const UploadText = styled.div`
  margin-top: 7px;
  text-align: center;
  font-size: 14px;
  font-family: 'Noto Sans CJK KR Regular';
  color: #818282;
  line-height: 23.8px;
`;

const StressLetter = styled.span`
  font-family: 'Noto Sans CJK KR Medium';
  color: #2b2e33;
`;

const FileUploadLabel = styled.label`
  text-decoration: underline;
  color: #fac62d;
  cursor: pointer;
`;

const FileUploadIcon = styled.div`
  text-align: center;
  padding-top: 28px;
`;
const UploadResult = styled.div`
  width: 100%;
  .file-row {
    cursor: pointer;
    height: 34px;
    display: flex;
    justify-content: space-between;
    padding: 0px 14px;
    color: #2b2e33;
    font-family: 'Noto Sans CJK KR Regular';
    font-size: 14px;
    line-height: 23.8px;
    border-radius: 3px;
    .check,
    .filename {
      margin-top: 6px;
    }
    .deleteFile {
      margin-top: 8px;
      padding-right: 15px;
    }
    .filename {
      width: 614px;
      height: 20px;
    }
    .check {
      padding-right: 7px;
    }
    background-color: #f0f0f0;
  }
  video {
    width: 80%;
  }
`;

export type FileUploadTypes = {
  answeredText: string | null;
  onCancelClick?: () => void;
  onUpload: ({isValid, file}: {isValid:boolean, file:File}) => void;
  loading:boolean;
};

function FileUpload({
  answeredText,
  onCancelClick,
  onUpload,
  loading,
}: FileUploadTypes): JSX.Element {
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);

  const isUploading = () => {
    if (loading && !uploadedFile) return true;
    return false;
  };
  const isUploaded = () => {
    if (uploadedFile && !loading) return true;
    return false;
  };
  const isWaiting = () => {
    if (!uploadedFile && !loading) return true;
    return false;
  };

  useEffect(() => {
    if (answeredText) {
      setUploadedFile(answeredText);
    }
  }, [answeredText]);


  const onDrop = useCallback((acceptedFiles) => {
    uploadValidation(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    noClick: true,
  });
  const fileAcceptance =
    '.pdf,.doc,.docx,.hwp,.xls,.xlsx,.ppt,.pptx,.zip,.alz,.rar,.7z';

  const uploadValidation = (file: File) => {
    const fileName = file.name;
    if (file.size <= 52428800) {
      if (isValidFile(fileName)) {
        onUpload({isValid:true, file});
      } else {
        window.alert(
          `다음 확장자만 업로드가 가능합니다.\n${fileAcceptance
            .replace(/\./g, '')
            .replace(/image\//gi, '')}`,
        );
        onUpload({isValid:false, file});
      }
    }else {
      alert("파일 크기를 초과합니다")
      onUpload({isValid:false, file});
    }
  };

  return (
    <>
      <UploadWrapper
        {...getRootProps()}
        answeredText={uploadedFile}
        isDragActive={isDragActive}
      >
      {isUploading() && (
        <div className="loadingSpinner">
          <img alt="loading" src={loadingSpinner} />
          <span> 파일을 업로드중입니다...</span>
        </div>
      )}
      {isUploaded() && (
          <UploadResult>
            <div className="file-row">
              <div className="filename">{uploadedFile}</div>
              <Icon
                icon="exit"
                width={20}
                className="deleteFile"
                color="#818282"
                onClick={() => {
                  onCancelClick();
                  setUploadedFile('');
                }}
                useCursor
              />
            </div>
          </UploadResult>
        )}
        {isWaiting() && (
          <UploadText>
            <FileUploadIcon>
              <Icon icon="fileUpload" width={97.42} color="#FAC62D" />
            </FileUploadIcon>
            <StressLetter> 여기에 파일을 끌어서 놓기</StressLetter> 또는
            <FileUploadLabel>
              <span> 브라우저에서</span>
              <input
                {...getInputProps()}
                className="fileBtn"
                type="file"
                accept={fileAcceptance}
                style={{ display: 'none' }}
                onChange={(e) => {
                  uploadValidation(e.target.files![0]);
                }}
              />
            </FileUploadLabel>
            <span> 올리기</span>
            <div className="file-size-text">최대 50MB 가능</div>
          </UploadText>
        )}
      </UploadWrapper>
    </>
  );
}

export default FileUpload;
