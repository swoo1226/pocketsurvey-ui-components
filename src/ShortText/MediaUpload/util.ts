/* eslint-disable @typescript-eslint/no-shadow */
import { isValidURL } from '../../util/isValidFile';

export const uploadFile = (
  file: File,
  type: 'image' | 'video',
  onUpload: ({ isValid, file }: { isValid: boolean; file: File }) => void,
): void => {
  const isValid = uploadValidation(file, type);
  onUpload({ isValid, file });
};

export type UploadFileType = (
  file: File,
  type: 'image' | 'video',
  onUpload: ({ isValid, file }: { isValid: boolean; file: File }) => void,
) => void;

const uploadValidation = (file: File, type: 'image' | 'video') => {
  const fileAcceptance = getFileAcceptance(type);
  const fileName = file.name;

  if (file.size > 10000000) {
    alert('파일 크기를 초과합니다');
    return false;
  }

  if (isValidURL(fileName, type) === false) {
    const acceptExtensions = fileAcceptance
      .replace(/\./g, '')
      .replace(/image\//gi, '');

    window.alert(`다음 확장자만 업로드가 가능합니다.\n${acceptExtensions}`);
    return false;
  }

  return true;
};

export const getFileAcceptance = (type: 'image' | 'video'): string => {
  if (type === 'image')
    return 'image/png, image/PNG, image/jpeg, image/JPEG, image/jpg, image/JPG';
  if (type === 'video') return '.mp4, .MP4';
  return '';
};

export default {};
