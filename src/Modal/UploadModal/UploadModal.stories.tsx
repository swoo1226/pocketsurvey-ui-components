import React, { useState } from 'react';
import UplaodModal from './UploadModal';
import styled from 'styled-components';
import { Meta } from '@storybook/react/types-6-0';
import UploadModal from './UploadModal';

export default {
    componnent: UplaodModal, 
    title: 'Components/Modal/UploadModal/UploadModal',
} as Meta;

export function Index() {
    return (
        <>
            <UploadModal title="업로드 문항" onClick={(file:File) => console.log(file)} onCancel={() => console.log("취소")}>
                <div>TEST</div>
            </UploadModal>
        </>
    )
}