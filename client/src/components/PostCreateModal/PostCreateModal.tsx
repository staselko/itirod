import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Input } from '@mui/material';
import Typography from '@mui/material/Typography';
import { v4 as uid } from 'uuid';
import { useDispatch } from 'react-redux';
import FormInput from '../../components/FormInput/FormInput';
import { createPostStart } from '../../redux/Posts/PostsActions';
import { convertBase64 } from '../../utils/api/Base64Parse';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  width: [200, 400],
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const PostCreateModal = ({ userId }: any) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const formData = new FormData();

  const [postData, setPostData] = useState({
    user: userId,
    id: uid(),
    title: '',
    imageUrl: '',
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();

    formData.append(
      'title',
      postData.title,
    );

    formData.append(
      'id',
      postData.id,
    );

    formData.append(
      'user',
      postData.user,
    );

    dispatch(createPostStart(formData));

    handleClose();
    setPostData({
      user: userId,
      id: uid(),
      title: '',
      imageUrl: '',
    });
  };

  const handleFileRead = async (event: any) => {
    const file = event.target.files[0];
    const toBase64 = await convertBase64(file);
    formData.append(
      'imageUrl',
      toBase64,
    );
  };

  const handleChange = (event: any) => {
    const { value, name: attrName } = event.target;
    setPostData({ ...postData, [attrName]: value });
  };

  return (
    <div>
      <Button onClick={handleOpen} sx={{ borderRadius: 7, border: 1 }}>Create Post</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}

      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Create Post
            </Typography>
            <form method="PUT" onSubmit={handleSubmit}>
              <FormInput
                type="title"
                name="title"
                label="Title"
                required
                value={postData.title}
                handleChange={handleChange}
              />

              <label htmlFor="icon-button-file">
                <Input
                  id="icon-button-file"
                  type="file"
                  name="imageUrl"
                  onChange={handleFileRead}
                  sx={{ display: 'none' }}
                />
                <IconButton color="primary" aria-label="upload picture" component="span">
                  <PhotoCamera />
                </IconButton>
              </label>
              <Button type="submit">
                Post It
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default PostCreateModal;
