import React, { useState } from 'react';
import styled from 'styled-components';
import { setConstantValue } from 'typescript';
import Textarea from '../Textarea/Textarea';
import Icon from '../Icon/Icon';

type RadioImageSelectionType = {};
const InnerSelection = styled.div`
  width: 100%;
  min-height: 140px;
  padding: 14px 7px;
  border-radius: 4.9px;
  background-color: #e9e1d5;
  display: flex;
`;
const ImageItemDraggable = styled.div``;
const ContentBox = styled.div`
  width: 190px;
  height: 168px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 2px 2px 3px #00000029;
  border-radius: 11.2px;
`;
const ImageSelectorHandler = styled.div`
  display: flex;
  margin-bottom: 4px;
  .blank {
    width: 119px;
  }
  /* .iconBox {
    display: none;
  } */
`;
const Image = styled.div`
  .imageAdd {
    padding: 44px;
    border-bottom: 0.5px solid #e2e2e2;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-family: 'Spoqa Han Sans Neo Medium';
    color: grey;
    font-size: 11.9px;
    cursor: pointer;
  }
`;
const Description = styled.div`
  textarea {
    border: 0px solid #dfdedd;
    text-align: center;
    margin-top: 20px;
  }
`;

const AddIamgeBox = styled.div`
  width: 190px;
  height: 168px;
  border-radius: 11.2px;
  background-color: #f2ede6;
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  opacity: 0.4;
  margin-left: 7px;
  margin-top: 25px;
  .plusButton {
    border-radius: 50%;
    background-color: white;
    margin: 0 auto;
  }
`;

function RadioImageSelection() {
  const [value, setValue] = useState<string>('');
  const [iconShow, setIconShow] = useState<boolean>(false);
    
  return (
    <InnerSelection>
      <ImageItemDraggable>
        <ImageSelectorHandler>
          <Icon
            icon="handler"
            width={20}
            color="#C9C8C7"
            rotate={0}
            useCursor
            onClick={() => console.log('handler')}
          />
          <div className="blank" />
          <div className="iconBox">
            <Icon
              icon="blockDuplicate"
              width={20}
              color="black"
              rotate={0}
              useCursor
              onClick={() => {}}
            />
            <Icon
              icon="delete"
              width={20}
              color="black"
              rotate={0}
              useCursor
              onClick={() => {}}
            />
          </div>
        </ImageSelectorHandler>
        <ContentBox className="contentBox">
          <Image>
            <div className="imageAdd">+ 이미지 추가</div>
          </Image>
          <Description>
            <Textarea
              type="basic"
              size="small"
              onChange={(data: string) => {
                setValue(data);
              }}
              value={value}
              tabIndex={0}
              readOnly={false}
              placeholder="내용을 입력해주세요"
              rows={2}
              cols={23}
              borderColor="0px solid #FFFFF"
            />
          </Description>
        </ContentBox>
      </ImageItemDraggable>
      <AddIamgeBox>
        <div className="plusButton">
          <Icon
            icon="plus"
            width={40}
            color="rgb(242, 171, 39)"
            rotate={0}
            useCursor
            onClick={() => console.log('click ADD')}
          />
        </div>
      </AddIamgeBox>
    </InnerSelection>
  );
}

export default RadioImageSelection;
