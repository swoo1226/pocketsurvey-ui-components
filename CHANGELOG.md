# 0.5.1 (2021.06.25)
- Icon컴포넌트에 onMouseLeave 이벤트를 추가함

# 0.5.0 (2021.06.25)
- Icon컴포넌트에 onMouseOver 이벤트를 추가함

# 0.4.62 (2021.06.24)

- barVerticalBase 가로 마진 100px로 고정
# 0.4.61 (2021.06.24)

- barVerticalBase 차트 가로 스크롤 기능 추가

# 0.4.60 (2021.06.24)

- 0.4.59버전 빌드 중 문제 생겨서 버전 업데이트

# 0.4.59 (2021.06.24)

- barHorizontalBase, barHorizontalStacked, barVerticalStacked 차트에서 세로 스크롤, overflow-y 옵션 추가

# 0.4.58 (2021.06.23)

- NPS 차트의 라인은 원 모양 심볼 크기를 설정
- barHorizontalBase 차트에서 세로 스크롤 가능하게 수정

# 0.4.57 (2021.06.23)

- 모든 차트들의 labelOption을 선택적으로 적용하게 함
- 기본값은 dynamic

# 0.4.56 (2021.06.23)

- BarVerticalStacked(누적차트)에서 차트 색상에 따라 레전드의 색상이 일치하지 않아 옵션에 color를 넣어주는 부분을 추가했습니다.

- 누적차트의 경우 legend를 하단 중앙에 위치하도록 수정했습니다.

# 0.4.55 (2021.06.22)

- 인공지능 보고서 분석중 아이콘 추가
- bar negative 차트에서 평균점수와 일치하는 시리즈 색상 변경

# 0.4.44 (2021.06.18)

- 순위설정 onItemClick +1 삭제

# 0.4.42 (2021.06.17)

- 0.4.41에 대한 build:types 재시도

# 0.4.41 (2021.06.17)

- 인공지능 보고서 주관식 키워드 차트에 사용할 차트 아이콘 추가

# 0.4.40 (2021.06.16)

- 버블 차트 추가
- 스윔레인 차트 (barNegative) 추가
- 가로형 막대 차트 정렬 기능 추가

# 0.4.35 (2021.06.08)

- 병렬 차트 추가

# 0.4.29 (2021.06.02)

- button / disabled 일 시 글자 색상 변경
- icon / 기존 reset -> random으로 변경, 새로운 reset 아이콘 추가

# 0.4.19 (2021.05.17)

textarea autofocus 제거

# 0.4.18 (2021.05.17)

척도 UI 라벨을 float에서 flex 기반으로 변경

# 0.4.3 (2021.05.04)

- 라디오 척도 UI 추가

# 0.4.2 (2021.05.03)

- 라디오 컴포넌트 호버 스타일 추가
- 너비 props 추가 (itemWidth)

# 0.4.1 (2021.04.30)

- 라디오 컴포넌트 체크 비활성화
- 체크랭킹 타입을 1 베이스로 변경

# 0.4.0 (2021.04.29)

라디오, 체크, 체크 랭킹의 스타일이 변경되었습니다.
라디오, 체크의 비활성화 모드가 추가 되었습니다. 흑백 스타일링을 적용하고 마우스 커서를 not-allowed로 설정하고, props로 받은 이벤트를 실행하지 않습니다.

# 0.3.39 (2021.04.27)

- 인풋에 버튼을 항상 보일지 말지 판별하는 buttonAlways 값을 추가했습니다.

# 0.3.35 && 0.3.36 (2021.04.21)

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
