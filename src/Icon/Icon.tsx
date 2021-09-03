import React from "react"
import * as icons from "./svg"

export type IconType = keyof typeof icons
export const iconTypes: IconType[] = Object.keys(icons) as any[]

export type IconProps = {
  /** 사용 할 아이콘 타입 */
  icon: IconType
  /** 아이콘 색상 */
  // color?: string;
  /** 아이콘 크기 */
  // size?: string | number;
  width: number
  className?: string
  rotate?: number
  color: string
  onClick?: () => void
  onMouseOver?: () => void
  onMouseLeave?: () => void
  useCursor?: boolean
  hoveredColor?: string
  selectCursor?:CursorStyleType
}





export type CursorStyleType = "default"|"pointer"|"text"|"move"|"no-drop"|"grab"|"grabbing"|"col-resize"|"row-resize"|"zoom-in"|"zoom-out"
 
  
  


/** 아이콘을 보여주고 싶을 땐 `Icon` 컴포넌트를 사용하세요.
 *
 * 이 컴포넌트는 svg 형태로 아이콘을 보여주며, props 또는 스타일을 사용하여 아이콘의 색상과 크기를 정의 할 수 있습니다.
 *
 * 스타일로 모양새를 설정 할 때에는 `color`로 색상을 설정하고 `width`로 크기를 설정하세요.
 */
function Icon({
  icon,
  className,
  width,
  rotate,
  color,
  onClick,
  onMouseOver,
  onMouseLeave,
  useCursor,
  hoveredColor,
  selectCursor,
}: IconProps): JSX.Element {
  const [isHover, setIsHover] = React.useState<boolean>(false)
  const SVGIcon = icons[icon]

  const switchingCursorPointer = (useCursor?:boolean,cursor?:CursorStyleType) => {
    if(useCursor){
      if(cursor){
        return cursor
      } else {
        return "pointer"
      }
    } else {
      return "default"
    }
  }
  
  return (
    <SVGIcon
      style={{
        width: `${width}px`,
        height: `${width}px`,
        transform: `rotate(${rotate}deg)`,
        fill: isHover && hoveredColor ? hoveredColor : color,
        cursor: `${switchingCursorPointer(useCursor,selectCursor)}`,
      }}
      className={className}
      onClick={onClick}
      onMouseOver={() => {
        if (onMouseOver) {
          onMouseOver()
        }
        setIsHover(true)
      }}
      onMouseLeave={() => {
        if (onMouseLeave) {
          onMouseLeave()
        }
        setIsHover(false)
      }}
    />
  )
}

export default Icon
