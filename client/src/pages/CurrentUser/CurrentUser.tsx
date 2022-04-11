import {
  Card, Box, CardMedia, Avatar, CardActions, CardContent, Typography,
} from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { IRootReducer } from '../../redux/RootReducer';
import PostCreateModal from '../../components/PostCreateModal/PostCreateModal';
import PostItem from '../../components/PostItem/PostItem';
import ProfileEditModal from '../../components/ProfileEditModal/ProfileEditModal';
import UserBG from '../../assets/images/Background.jpg';
import { IUser } from '../../redux/Users/UsersInterfaces';

const CurrentUser = () => {
  const {
    firstName, secondName, email, _id, imageUrl, posts,
  } = useSelector((store: IRootReducer): IUser => store.users.currentUser);
  return (
    <div>
      <div className="forum__user-page">
        <Card sx={{ maxWidth: [300, 400, 655] }}>
          <Box className="forum__user-page-profile">
            <CardMedia
              component="img"
              height="240"
              image={UserBG}
              alt="users background"
            />
            <Box sx={{
              display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '0 30px',
            }}
            >
              <Avatar
                className="forum__user-page-profile-avatar"
                alt="users avatar"
                src={imageUrl}
                sx={{ height: 100, width: 100 }}
              />
              <CardActions>
                <ProfileEditModal />
              </CardActions>
            </Box>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" fontWeight={700}>
                {`${firstName} ${secondName}`}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {email}
              </Typography>
            </CardContent>
            <CardActions>
              <PostCreateModal userId={_id} />
            </CardActions>
          </Box>
          <Box className="forum__user-page-posts">
            {
                posts

                  ? posts.map((post) => <PostItem key={post._id} {...post} />)
                  : <div>No posts!</div>
            }
          </Box>
        </Card>
      </div>
    </div>
  );
};

export default CurrentUser;
