/* eslint-disable no-underscore-dangle */
import Collapse from '@mui/material/Collapse';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserPageContainer from '../../pages/User/UserContainer';
import { IRootReducer } from '../../redux/RootReducer';
import { getUsersStart } from '../../redux/Users/UsersActions';
import { IUser } from '../../redux/Users/UsersInterfaces';
import UserItem from '../UserItem/UserItem';

import './UserOverview.scss';

const UsersOverview = () => {
  const users: IUser[] = useSelector((store: IRootReducer) => store.users.usersList);
  const [collapse, setCollapse] = useState(false);
  const [page, setPage] = useState(2);
  const dispatch = useDispatch();
  useEffect(() => {
    setCollapse(true);
    dispatch(getUsersStart(1));
    return () => setCollapse(false);
  }, []);

  const handleScroll = (event: any) => {
    const bottom = event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight;
    if (bottom) {
      setPage(page + 1);
      dispatch(getUsersStart(page));
    }
  };

  return (
    <div>
      {
        users.length
          ? (
            <div className="forum__users-field" onScroll={handleScroll}>
              {
                users
                  .map((item: IUser) => (
                    <Collapse key={item._id} in={collapse}>
                      <UserItem key={item._id} {...item} />
                    </Collapse>
                  ))
         }
            </div>
          ) : <UserPageContainer />
      }
    </div>
  );
};

export default UsersOverview;
