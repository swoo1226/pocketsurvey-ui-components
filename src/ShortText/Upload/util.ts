/* eslint-disable @typescript-eslint/no-shadow */
import { OnUploadType } from './types';

export type UploadType = 'image' | 'video' | 'file';

export const uploadFile = (
  file: File,
  type: UploadType,
  onUpload: OnUploadType,
): void => {
  const isValid = uploadValidation(file, type);
  onUpload({ isValid, file });
};

export type UploadFileType = (
  file: File,
  type: UploadType,
  onUpload: OnUploadType,
) => void;

const getFileSizeLimit = (type: UploadType) => {
  if (['image', 'video'].includes(type)) return 10000000;
  return 52428800; // file
};

const uploadValidation = (file: File, type: UploadType): boolean => {
  const fileAcceptance = getFileAcceptance(type);
  const fileName = file.name;

  if (file.size > getFileSizeLimit(type)) {
    alert('파일 크기를 초과합니다');
    return false;
  }

  if (isValidFileORURL(fileName, type) === false) {
    const acceptExtensions = fileAcceptance
      .replace(/\./g, '')
      .replace(/image\//gi, '');

    window.alert(`다음 확장자만 업로드가 가능합니다.\n${acceptExtensions}`);
    return false;
  }

  return true;
};

export const getFileAcceptance = (type: UploadType): string => {
  if (type === 'image')
    return 'image/png, image/PNG, image/jpeg, image/JPEG, image/jpg, image/JPG';
  if (type === 'video') return '.mp4, .MP4';
  if (type === 'file')
    return '.pdf,.doc,.docx,.hwp,.xls,.xlsx,.ppt,.pptx,.zip,.alz,.rar,.7z';
  return '';
};

export const isValidFileORURL = (
  fileName: string,
  type: UploadType,
): boolean => {
  if (type === 'image') {
    const regex = new RegExp('(.png|.jpg|.jpeg)', 'i');
    if (regex.test(fileName)) return true;
  }

  if (type === 'video') {
    const extension = new RegExp('.mp4', 'i');
    if (extension.test(fileName)) return true;
  }

  if (type === 'file') {
    const extension = new RegExp(
      `(${getFileAcceptance('file').replace(/,/g, '|')})$`,
      'i',
    );
    if (extension.test(fileName)) return true;
  }

  return false;
};

export default {};
