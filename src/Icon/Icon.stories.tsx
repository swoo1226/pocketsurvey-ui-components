import React from 'react'
import {
  withKnobs,
  number,
  text,
  select,
} from "@storybook/addon-knobs";
import styled, { createGlobalStyle } from "styled-components";
import Icon, { iconTypes, CursorStyleType, IconType } from "./Icon";
import { Meta } from "@storybook/react/types-6-0";
import * as All from "./svg/index";

const allIcons = Object.keys(All);
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 40px;
  margin-left: 20px;
  column-gap: 20px;
  margin-right: 20px;
`;

const IconContainer = styled.div`
  p{
    margin-top: 10px;
  }
`;

const Container = styled.div`
  .title-wrapper {
    padding-bottom: 20px;
    margin-left: 20px;
    margin-bottom: 20px;
  }
  background-color: #0c101c;
  color: #fbfaf7;
`;
const IconBox = styled.div`
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  background-color: #242833;
  padding: 50px;
  cursor: pointer;
`;

export default {
  component: Icon,
  title: "Core/Icon",
  decorators: [withKnobs],
} as Meta;

export function Index() {
  const width = number("width", 50);
  const color = text("color", "white");
  const rotate = number("rotate", 0);
  return (
    <Container>
      <div className="title-wrapper">
        <h1>Icon</h1>
        <span>포켓서베이에서 사용하고 있는 아이콘들입니다. </span>
      </div>
      <Grid className="grid">
        {allIcons.map((item: any, index: number) => (
          <IconContainer>
            <IconBox
              onClick={() => {
                const textArea = document.createElement("textarea");
                document.body.appendChild(textArea);
                textArea.value = item;
                textArea.select();
                document.execCommand("copy");
                document.body.removeChild(textArea);
                alert("copied");
              }}
            >
              <Icon
                icon={item}
                width={20}
                color={"white"}
                rotate={rotate}
                useCursor={true}
                hoveredColor={"red"}
                selectCursor="grab"
              />
            </IconBox>
            <p>{item}</p>
          </IconContainer>
        ))}
      </Grid>
    </Container>
  );
}

export function mouseover() {
  const theme = select("icon name", iconTypes, "singleChoice");
  const width = number("width", 50);
  const color = text("color", "black");
  const rotate = number("rotate", 0);

  return (
    <Icon
      icon={theme}
      width={width}
      color={color}
      rotate={rotate}
      onClick={() => alert("Hello!")}
      onMouseOver={() => alert("mouseover!")}
      onMouseLeave={() => alert("mousedown!")}
      useCursor={true}
    />
  );
}
