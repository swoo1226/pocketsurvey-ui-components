declare type EmailPropsType = {
    value: string;
    onChange: (value: string) => void;
    width?: number | string;
    isMobile: boolean;
    focusingIndex?: number;
};
declare function Email({ value, onChange, width, isMobile, focusingIndex, }: EmailPropsType): JSX.Element;
export default Email;
