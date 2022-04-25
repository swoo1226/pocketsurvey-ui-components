export type PresetType = 'primary-main' | 'primary-yellow' | 'secondary-text';
export type SizeType = 'large' | 'medium' | 'small';
export type PositionType = 'left' | 'right' | 'up';

export interface IDropdownContextProps {
  domSize: {
    base: {
      width: number;
      height: number;
    };
  };
  preset: PresetType;
  size: SizeType;
  position: PositionType;
  isDisabled?: boolean;
  isFocused?: boolean;
  showList: boolean;
  groupWrapperRef: React.RefObject<HTMLDivElement>;
  setShowList: React.Dispatch<React.SetStateAction<boolean>>;
  baseRef: React.RefObject<HTMLDivElement>;
}
