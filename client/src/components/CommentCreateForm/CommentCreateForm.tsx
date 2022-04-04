import React, { useState } from 'react';
import {
  FormControl,
  Box, TextField, Button, Avatar,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createCommentStart } from '../../redux/Posts/PostsActions';
import { IRootReducer } from '../../redux/RootReducer';

const CommentCreateForm = () => {
  const { _id, imageUrl } = useSelector((store: IRootReducer) => store.users.currentUser);
  const { postId } = useParams();
  const dispatch = useDispatch();
  const [newComment, setNewComment] = useState({

    postId,
    body: '',
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(createCommentStart({ ...newComment, _id }));

    setNewComment({
      ...newComment,
      body: '',
    });
  };

  const handleChange = (event: any) => {
    const { value, name: targetName } = event.target;

    setNewComment({ ...newComment, [targetName]: value });
  };

  return (
    <FormControl
      variant="standard"
      sx={{
        width: '100%',
      }}
    >
      <form onSubmit={handleSubmit}>
        <Box sx={{
          display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'flex-end',
        }}
        >
          <Avatar src={imageUrl} sx={{ color: 'action.active', mr: 1, my: 0.1 }} />
          <TextField
            id="input-with-sx"
            onChange={handleChange}
            name="body"
            value={newComment.body}
            label="Comment It"
            variant="standard"
          />
          <Button variant="contained" type="submit" endIcon={<SendIcon />}>
            Send
          </Button>
        </Box>
      </form>
    </FormControl>
  );
};

export default CommentCreateForm;
