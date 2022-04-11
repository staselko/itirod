import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import './ServerError.scss';

const ServerError = () => (

  <div className="forum__not-found">
    <div className="forum__not-found-error">500</div>
    <div className="forum__not-found-error-sub">Internal Server Error</div>
    <Link to="/" style={{ textDecoration: 'none' }}>
      <Button size="large" variant="outlined">Back Home</Button>
    </Link>
  </div>
);

export default ServerError;
