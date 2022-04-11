import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.scss';

const NotFound = () => (

  <div className="forum__not-found">
    <div className="forum__not-found-error">404</div>
    <div className="forum__not-found-error-sub">Page Not Found</div>
    <Link to="/" style={{ textDecoration: 'none' }}>
      <Button size="large" variant="outlined">Back Home</Button>
    </Link>
  </div>
);

export default NotFound;
