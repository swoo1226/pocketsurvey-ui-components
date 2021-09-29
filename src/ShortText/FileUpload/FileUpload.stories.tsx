import React from "react";
import FileUpload from "./FileUpload";
import { Meta } from "@storybook/react/types-6-0";
import { boolean, withKnobs } from "@storybook/addon-knobs";

export default {
  component: FileUpload,
  title: "Components/FileUpload",
} as Meta;

export function Index() {
  return (
    <>
      <h1>FileUpload</h1>
      <div>
        <p>파일업로드 대기 상태</p>
        <FileUpload answeredText={""} />
      </div>
      <div>
        <br></br>
        <p>파일 업로드 된 상태</p>
        <FileUpload answeredText={"Example.pdf"} />
      </div>
    </>
  );
}
