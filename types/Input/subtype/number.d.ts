declare type NumberPropsType = {
    value: string;
    onChange: (value: string) => void;
    isMobile?: boolean;
};
declare function Number({ value, onChange, isMobile }: NumberPropsType): JSX.Element;
export default Number;
