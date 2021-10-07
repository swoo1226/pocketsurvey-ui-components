declare type PhonePropsType = {
    value: string;
    onChange: (value: string) => void;
    isMobile?: boolean;
};
declare function Phone({ value, onChange, isMobile }: PhonePropsType): JSX.Element;
export default Phone;
