import {
  Card, Box, Typography, Avatar,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { IUser } from '../../redux/Users/UsersInterfaces';
import './UserItem.scss';

const UserItem = (item: IUser) => {
  const {
    firstName,
    secondName,
    _id,
    imageUrl,
    company,
  } = item;

  return (
    <Link to={`${_id}`} className="forum__users-field-item">
      <div className="forum__users-field-item">
        <Card sx={{
          maxWidth: 700, width: ['300px', '500px'], display: 'flex', flexDirection: 'row', borderRadius: '20px',
        }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Avatar
              alt="users avatar"
              src={imageUrl}
              sx={{ height: 100, width: 100, borderRadius: '20px 0 0 20px' }}
              className="forum__users-field-item-avatar"
            />
            <Box className="forum__users-field-item-info">
              <Typography className="forum__users-field-item-info-name">
                {`${firstName} ${secondName}`}
              </Typography>
              <Typography>
                {company?.catchPhrase}
              </Typography>
            </Box>
          </Box>
        </Card>
      </div>
    </Link>
  );
};

export default UserItem;
