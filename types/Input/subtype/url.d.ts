declare type URLPropsType = {
    value: string;
    onChange: (value: string) => void;
    isMobile?: boolean;
};
declare function URL({ value, onChange, isMobile }: URLPropsType): JSX.Element;
export default URL;
