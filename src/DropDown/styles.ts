import styled from 'styled-components';

export const PNG = styled.img<{ pngImageCropCircle?: boolean }>`
  width: 23px !important;
  height: 21px !important;
  margin-bottom: 0px !important;
  ${(props) =>
    props.pngImageCropCircle && 'object-fit:cover; border-radius:50%;'}
`;

export const DropDownContainer = styled.div<{
  width: number;
  containerHeight?: string;
}>`
  width: ${(props) => props.width}px;
  font-size: 12px;
  text-align: left;
  ${(props) => props.containerHeight && `height: ${props.containerHeight};`}
`;

export const DropDownBoxContainer = styled.div<{
  disable: boolean;
  themeColor: string;
  zIndex: number;
  height: number;
}>`
  width: 100%;
  height: ${(props) => props.height}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 10px;
  border-radius: 3px;
  border: 1px solid ${(props) => (props.disable ? '#C9C8C7' : props.themeColor)};
  background-color: ${(props) => (props.disable ? '#F0F0F0' : 'white')};
  cursor: ${(props) => (props.disable ? 'no-drop' : 'pointer')};
  z-index: ${(props) => props.zIndex - 1};
`;

export const DropDownBox = styled.div<{
  disable: boolean;
  themeColor: string;
  height: number;
}>`
  width: 80%;
  height: ${(props) => props.height-4}px;
  display: flex;
  align-items: center;
  color: ${(props) => (props.disable ? '#C9C8C7' : '#111111')};
  background-color: ${(props) => (props.disable ? '#F0F0F0' : undefined)};
  cursor: ${(props) => (props.disable ? 'no-drop' : 'pointer')};
`;

export const DropDownList = styled.div<{
  disable: boolean;
  isShowList: boolean;
  listLength: number;
  width: number;
  zIndex: number;
  height: number;
  listMaxHeight?: number;
  textColor?: string;
  fontSize?: number;
}>`
  width: ${(props) => props.width}px;
  z-index: ${(props) => props.zIndex};
  height: ${(props) => props.listLength * props.height}px;
  position: absolute;
  box-shadow: 0px 3px 6px #d2cbc0;
  color: ${(props) =>
    props.disable ? props.textColor ?? '#C9C8C7' : '#111111'};
  border-radius: 3px;
  padding: 8px 0;
  max-height: ${(props) => `${props.listMaxHeight ?? 200}px`};
  overflow-y: auto;
  background: #ffffff;
  margin: 7px 0px;
  ${(props) => props.fontSize && `font-size: ${props.fontSize}px;`}
`;

export const DropDownItem = styled.div<{
  index: number;
  selected: number;
  themeColor: string;
  hidden?: boolean;
  height: number;
}>`
  display: ${(props) => (props.hidden ? 'none' : 'flex')};
  align-items: center;
  box-sizing: border-box;
  padding: 0 10px;
  height: ${(props) => props.height}px;
  cursor: pointer;
  background-color: ${(props) =>
    props.selected === props.index ? '#F0F0F0' : 'white'};
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.selected === props.index ? '#F0F0F0' : props.themeColor};
  }
`;

export const DropDownItemText = styled.p<{ fontSize?: number }>`
  white-space: nowrap;
  overflow: hidden;
  align-items: center;
  width: 100%;
  margin: 0;
  margin-left: 6px;
  text-overflow: ellipsis;
  ${(props) => props.fontSize && `font-size: ${props.fontSize}px;`}
`;
