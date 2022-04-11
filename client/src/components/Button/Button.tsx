import React from 'react';

import './Button.scss';

const Button = ({ children, ...otherProps }: any) => (
  <div>
    <button {...otherProps} type="button">{ children }</button>
  </div>
);

export default Button;
