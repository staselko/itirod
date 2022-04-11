import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './SpinnerStyles';

type TProps = {
  isLoading: Boolean,
  otherProps: []
}

const Spinner = (WrappedComponent: any) => ({ isLoading, ...otherProps }: TProps) => (isLoading ? (
  <SpinnerOverlay>
    <SpinnerContainer />
  </SpinnerOverlay>
) : (
  <WrappedComponent {...otherProps} />
));

export default Spinner;
