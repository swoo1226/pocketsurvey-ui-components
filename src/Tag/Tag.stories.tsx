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
     <Tag theme="pastellBlue" disabled={true}>pastellBlue </Tag>
     <Tag theme="pastellYellow" disabled={true}>pastellYellow </Tag>
     <Tag theme="defaultGray" disabled={true}>defaultGray </Tag>
    <Tag theme="defaultGray" backgroundColor={"#fac62d"} disabled={true}>#fac62d </Tag><br></br>

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
