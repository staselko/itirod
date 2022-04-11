import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';
import {
  FormControl, Box, TextField, Button, CardMedia, Typography, Collapse,
} from '@mui/material';
import { IPost } from '../../redux/Posts/PostsInterfaces';
import { deletePostStart, editPostStart } from '../../redux/Posts/PostsActions';

const PostItemUser = ({
  title,
  _id,
  imageUrl,
}: IPost) => {
  const [redacting, setRedacting] = useState(false);
  const [postText, setPostText] = useState({
    _id,
    title,
  });
  const [checked, setChecked] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deletePostStart(_id));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(editPostStart(postText));
    setRedacting(!redacting);
  };

  const handleChange = (event: any) => {
    const { value, name: targetName } = event.target;

    setPostText({ ...postText, [targetName]: value });
  };

  const handleEdit = () => {
    setRedacting(!redacting);
  };

  return (
    <Box
      className="forum__user-data-field-item"
      sx={{
        maxWidth: [300, 400, 655],
        height: [100, 170],
        mt: ['10px', '20px'],
      }}
    >
      {
      redacting
        ? (
          <FormControl
            variant="standard"
            sx={{
              width: '100%',
            }}
          >
            <FormControl onSubmit={handleSubmit}>
              <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                alignItems: 'flex-end',
              }}
              >
                {' '}
                <TextField
                  id="input-with-sx"
                  onChange={handleChange}
                  name="title"
                  value={postText.title}
                  variant="standard"
                  sx={{
                    width: '100px',
                  }}
                />
                <Button
                  variant="contained"
                  type="submit"
                  endIcon={<SendIcon />}
                  onClick={handleSubmit}
                >
                  Send
                </Button>
              </Box>
            </FormControl>
          </FormControl>
        ) : (
          <Link to={`/posts/${_id}`} className="forum__user-data-field-item_link">
            <Box
              sx={{
                width: ['100%'],
                paddingBottom: ['10px', '30px'],
              }}
              className="forum__user-data-field-item_info"
            >
              <CardMedia
                component="img"
                sx={{
                  width: ['110px', '170px'],
                  height: ['110px', '170px'],
                  mr: ['10px', '30px'],
                }}
                className="forum__user-data-field-item-image"
                image={(imageUrl as string)}
                alt="green iguana"
              />
              {' '}
              <Typography
                className="forum__user-data-field-item-title"
              >
                {title}
              </Typography>
            </Box>
          </Link>
        )
    }
      {
        location.pathname === '/' ? (
          <div onClick={() => setChecked(!checked)}>
            <MoreHorizIcon />
            <Collapse in={checked}>
              <div onClick={handleEdit}>
                <EditIcon />
              </div>
              <div onClick={handleDelete}>
                <ClearIcon />
              </div>
            </Collapse>
          </div>
        ) : null
      }
    </Box>
  );
};

export default PostItemUser;
