import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import DropDownContent, { DropDownType } from './DropDownContent';

const DropDown = (props: DropDownType) => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <DropDownContent {...props} />
  </ErrorBoundary>
);

export default DropDown;

const ErrorFallback = () => (
  <DropDown
    list={[]}
    selected={null}
    disable
    themeColor={{
      mainColor: '#59C4DB',
      subColor: '#DEF3F8',
    }}
    onItemClick={() => {}}
  />
);
