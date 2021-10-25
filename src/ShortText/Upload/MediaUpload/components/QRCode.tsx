import React from 'react';
import styled from 'styled-components';

interface IQRCodeProps {
  qrCode: string | null;
}

const QRCode = ({ qrCode }: IQRCodeProps): JSX.Element => {
  if (qrCode)
    return <QRImage src={`data:image/png;base64, ${qrCode}`} alt="QR" />;

  return (
    <NoQR>
      {' '}
      QR 코드가 <br />
      준비중입니다
    </NoQR>
  );
};
export default QRCode;

const QRImage = styled.img`
  width: 100%;
`;

const NoQR = styled.div`
  height: 100%;
  font-size: 16px;
  margin-top: 35%;
  height: 35%;
`;
