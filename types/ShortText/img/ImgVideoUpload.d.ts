export declare type ImgVideoType = {
    onClick: () => void;
    qrCode: string | null;
    mediaSrc: string | null;
    type: "video" | "image";
    onUpload: ({ isValid, file }: {
        isValid: boolean;
        file: File;
    }) => void;
    loading: boolean;
};
declare function ImgVideo({ onClick, qrCode, mediaSrc, type, onUpload, loading, }: ImgVideoType): JSX.Element;
export default ImgVideo;
