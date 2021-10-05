import React from "react";
import FileUpload from "./FileUpload";
import { Meta } from "@storybook/react/types-6-0";
import { boolean, withKnobs } from "@storybook/addon-knobs";

export default {
  component: FileUpload,
  title: "Components/ShortText/FileUpload",
} as Meta;

export function Index() {
  return (
    <>
      <h1>FileUpload</h1>
      <div>
        <p>파일업로드 대기 상태</p>
        <FileUpload loading={false} answeredText={""} onUpload={({isValid, file}:{isValid:boolean; file:File}) => console.log(isValid, file) } />
      </div>
      <div>
        <br></br>
        <p>파일 업로드 된 상태</p>
        <FileUpload  loading={false} answeredText={"Example.pdf"}  onCancelClick={() => alert("Cancel Cliked")} onUpload={()=>console.log("!")}/>
      </div>
      <div>
        <br></br>
        <p>업로드 로딩 진행중</p>
        <FileUpload loading={true} answeredText={null}  onCancelClick={() => alert("Cancel Cliked")} onUpload={()=>console.log("!")}/>
      </div>
    </>
  );
}