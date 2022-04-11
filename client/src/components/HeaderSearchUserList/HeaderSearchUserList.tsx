import { Avatar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { IUser } from '../../redux/Users/UsersInterfaces';

import './HeaderSearchUserList.scss';

const HeaderSearchUserList = ({
  firstName, secondName, imageUrl, _id,
}: IUser) => (
  <div className="forum__header-user-search">
    <Link to={`users/${_id}`} className="forum__header-user-search-item">
      <Avatar
        src={imageUrl}
        className="forum__header-user-search-item-image"
      />
      <div className="forum__header-user-search-item-name">
        {`${firstName} ${secondName}`}
      </div>
    </Link>
  </div>
);

export default HeaderSearchUserList;
