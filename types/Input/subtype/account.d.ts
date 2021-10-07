export declare type ListType = {
    name: string;
    icon: string;
}[];
declare type AccountPropsType = {
    value: string;
    onChange: (value: string) => void;
    isMobile?: boolean;
    dropdownSelectCallback?: () => void;
};
declare function Account({ value, onChange, isMobile, dropdownSelectCallback, }: AccountPropsType): JSX.Element;
export default Account;
