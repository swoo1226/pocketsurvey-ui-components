import { DropzoneInputProps } from 'react-dropzone';

export type OnUploadType = ({
  isValid,
  file,
}: {
  isValid: boolean;
  file: File;
}) => void;

export type GetInputPropsType = <T extends DropzoneInputProps>(
  props?: T | undefined,
) => T;
