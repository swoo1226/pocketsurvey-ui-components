declare type ProgressBarType = {
    percent: number;
    barColor: string;
    thickness: number;
    className?: string;
};
declare function ProgressBar({ percent, barColor, thickness, className, }: ProgressBarType): JSX.Element;
export default ProgressBar;
