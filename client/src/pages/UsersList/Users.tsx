import React, { FC } from 'react';
import UsersOverview from '../../components/UsersOverview/UsersOverview';

import './Users.scss';

const Users: FC = () => (
  <div className="forum__users">
    <UsersOverview />
  </div>
);

export default Users;
