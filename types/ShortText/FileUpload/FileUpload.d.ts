export declare type FileUploadTypes = {
    answeredText: string | null;
    onCancelClick?: () => void;
    onUpload: ({ isValid, file }: {
        isValid: boolean;
        file: File;
    }) => void;
    loading: boolean;
};
declare function FileUpload({ answeredText, onCancelClick, onUpload, loading, }: FileUploadTypes): JSX.Element;
export default FileUpload;
