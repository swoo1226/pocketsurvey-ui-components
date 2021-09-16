import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Tag from "./Tag";
import styled from "styled-components";

export default {
  component: Tag,
  title: "Components/Tag",
} as Meta;

const ConditionAlert = styled.div`
    p{
        font-weight: 600;
    }
`;

const SurveyCreate = styled.div`
  margin-top: 10px;
  p{
        font-weight: 600;
    }
`;

const Discript = styled.div`
    border: 1px solid #e9e1d5;
    padding: 10px;
`;

export function Index() {
  return (
    <>
    <Discript>
    <h2>사용 방법</h2>
    필수로 넘겨야 하는 타입은 theme으로 아래와 같이 3가지가 있습니다. <br></br>
     <Tag theme="pastellBlue" disabled={true}>pastellBlue </Tag>
     <Tag theme="pastellYellow" disabled={true}>pastellYellow </Tag>
     <Tag theme="defaultGray" disabled={true}>defaultGray </Tag> <br></br>
    그 외의 색상을 사용할 경우, 아래처럼 backgroundColor 속성에 색상을 넣어주면됩니다. <br></br>
    <Tag theme="defaultGray" backgroundColor={"#fac62d"} disabled={true}>#fac62d </Tag><br></br>
    disabled속성을 True로 넘기면 onClick 속성을 추가하지 않고, false로 사용하면 onClick 속성을 사용할 수 있습니다 <br></br>
    hover시 색상변경을 하려면 hoverColor 속성에 값을 추가하면 됩니다. <br></br>
    fontSize 속성은 디폴트로 12px이고 따로 지정이 가능합니다.

    </Discript>
      <ConditionAlert>
          <p>조건알림에서 사용되고 있는 모양(hoverColor 및 onClick 사용)</p>
        <Tag
          theme="defaultGray"
          disabled={false}
          onClick={() => alert("조건 이름!")}
          hoverColor={"#fac62d"}
          fontSize={14}
        >
          조건 이름
        </Tag>
      </ConditionAlert>
      <SurveyCreate>
          <p> 설문제작에서 사용되고 있는 태그 </p>
          
        <Tag theme="pastellBlue" disabled={true}>
          추천
        </Tag>
        <Tag theme="pastellYellow" disabled={true}>
          NPS
        </Tag>
        <Tag theme="pastellYellow" disabled={true}>
          조직
        </Tag>
      </SurveyCreate>
    </>
  );
}
