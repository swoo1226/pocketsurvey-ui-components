declare type ToggleType = {
    toggleOnBackgroundColor: string;
    hoveredBackgroundColor: string;
    isToggleOn: boolean;
    setIsToggleOn: (isToggleOn: boolean) => void;
    className?: string;
    disable?: boolean;
};
declare function Toggle({ toggleOnBackgroundColor, hoveredBackgroundColor, isToggleOn, setIsToggleOn, className, disable, }: ToggleType): JSX.Element;
export default Toggle;
