import React from 'react';
import { IAlertProps } from './Alert';

interface IAlertIconProps {
  status: IAlertProps['status'];
}

export const AlertIcon = ({ status }: IAlertIconProps) => {
  if (status === 'complete')
    return (
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M44 22C44 34.1503 34.1503 44 22 44C9.84974 44 0 34.1503 0 22C0 9.84974 9.84974 0 22 0C34.1503 0 44 9.84974 44 22ZM20.534 31.8244L33.9101 17.4929L30.6934 14.4907L20.534 25.3758L15.5079 19.9907L12.2912 22.9929L20.534 31.8244Z"
          fill="#70D473"
        />
      </svg>
    );

  if (status === 'warning')
    return (
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M44 22C44 34.1503 34.1503 44 22 44C9.84974 44 0 34.1503 0 22C0 9.84974 9.84974 0 22 0C34.1503 0 44 9.84974 44 22ZM24.1999 29.3221H19.7999V33.0002H24.1999V29.3221ZM20.453 26.4H23.7186L24.6124 11H19.628L20.453 26.4Z"
          fill="#F37165"
        />
      </svg>
    );

  if (status === 'error')
    return (
      <svg
        width="40"
        height="36"
        viewBox="0 0 40 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21.8475 1.02578C21.0865 -0.341927 18.9936 -0.341927 18.2325 1.02578L0.347887 32.8738C-0.603424 34.2415 0.538149 36 2.06025 36H38.0198C39.5419 36 40.4932 34.2415 39.7321 32.8738L21.8475 1.02578ZM21.2763 25.2537H18.6126L18.0418 15.0936L17.8516 11.5767H22.0373L21.8471 15.0936L21.2763 25.2537ZM21.8471 30.7246H17.8516V27.2076H21.8471V30.7246Z"
          fill="#F2A128"
        />
      </svg>
    );

  return <></>;
};

export default AlertIcon;
