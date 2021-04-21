# 0.3.35 (2021.04.21)

## Radio

- Radio 컴포넌트를 input, label이 아닌 div, span으로 재구성

# 0.3.34 (2021.04.20)

## Toggle

- 토글 컴포넌트를 display:flex 제외하고 재구성

# 0.3.33 (2021.04.09)

## DropDown

- 드롭다운 목록 컨테이너의 높이를 200px 미만에서는 리스트 개수에 맞추게 수정

# 0.3.32 (2021.04.08)

## DropDown

- 드롭다운의 width와 height를 props로 선택적으로 전달받음
- 값을 지정하지 않는 경우 각각 200px, 34px을 기본으로 함
- 드롭다운 리스트가 열렸을 경우 position abolute
- z index를 props로 선택적으로 받음

# 0.3.31 (2021.04.07)

## DropDown

- ie 환경 대응하기 위해 각 내부 요소에 height 부여

## Input

- ie 환경에 대응하기 위해 input 요소에 outline none 적용

## Icon

- ie 환경에 대응하기 위해 svg 가로세로 1:1 비율에 맞추어 icon에 width와 같은 값으로 height 부여

# 0.3.25 (2021.04.02)

## Modal

- 버튼에 cursor 추가

## Button

- 버튼 disabled 기능 추가

# 0.3.23 (2021.03.31)

## DropDown

- list item에 hidden이라는 값이 true로 주어지면, 옵션으로 나타내지 않음
- 숨겨지기만 하므로, list item index는 list 기준으로 각 아이템에 전달됨

# 0.3.21 (2021.03.29)

## Icon

- 보고서에 사용되는 아이콘 추가

# 0.3.20 (2021.03.26)

## DropDown

- text ellipsis 적용

# 0.3.16 (2021.03.23)

## Input

- 원하는 아이콘이 있다면, 해당 아이콘으로 cancelButton 설정

# 0.3.15 (2021.03.18)

## Modal

- modal padding 수정
- modal button 컬러 추가
- modal 취소 버튼 호버 컬러 추가

# 0.3.13 (2021.03.17)

## Input

- input focus일 때 효과 추가
- Input cancleButton에 cursor 추가

## DropDown

- dropdown box에 arrow icon 추가
- disabled일 경우, 아이콘 색상 변경

# 0.3.11 (2021.03.16)

## Modal

- Modal 배경 추가

## DropDown

- placeholder 추가

## Icon

- 커서 추가

# 0.3.10 (2021.03.15)

## Input

- props 추가

## Textarea

- props추가

# 0.3.9 (2021.03.12)

## Dropdown

- props 추가

## Textarea

- props 추가

## Input

- props 추가

# 0.3.8

## Dropdown

- 드롭다운 호버 스타일 문법 수정

## Modal

- 취소 버튼 onclick 함수 추가
- ProgressBar 컴포넌트 추가

# 0.3.6 (2021.03.11)

## All Components

- 클래스 이름 props로 추가할 수 있게 수정

## Dropdown

- 드롭다운에 hook error 수정

# 0.3.5

## Textarea

- onChange props 추가
- className props 추가

## config

- 변경

# 0.3.2 (2021.03.10)

## Icon

- onClick props 추가

## config

- rollup : build시에 Pagination 컴포넌트 관련 설정 추가
- ts : build:types 실행 시, dist 폴더 덮어쓰기 활성화
