import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Input } from '@mui/material';
import { convertBase64 } from '../../utils/api/Base64Parse';
import FormInput from '../FormInput/FormInput';
import { changeUserProfileStart, deleteUserStart } from '../../redux/Users/UsersActions';
import { IUser } from '../../redux/Users/UsersInterfaces';
import { IRootReducer } from '../../redux/RootReducer';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: [200, 400],
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ProfileEditModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const formData = new FormData();

  const {
    firstName,
    secondName,
    username,
    email,
    _id,
  }: IUser = useSelector((state: IRootReducer) => state.users.currentUser);
  const [userData, setUserData] = useState<IUser>({
    firstName, secondName, imageUrl: '', username, email, _id,
  });

  const handleDelete = () => {
    dispatch(deleteUserStart(_id));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    formData.append(
      'firstName',
      (userData.firstName as string),
    );
    formData.append(
      'secondName',
      (userData.secondName as string),
    );
    formData.append(
      'username',
      (userData.username as string),
    );
    formData.append(
      'email',
      (userData.email as string),
    );
    formData.append(
      '_id',
      (userData._id as string),
    );
    dispatch(changeUserProfileStart(formData));
    handleClose();
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

    setUserData({ ...userData, [attrName]: value });
  };

  return (
    <div>
      <Button onClick={handleOpen} sx={{ borderRadius: 7, border: 1 }}>Edit Profile</Button>
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
              Edit Profile
            </Typography>
            <form method="PUT" onSubmit={handleSubmit}>
              <FormInput
                type="text"
                name="email"
                label="Change email"
                value={userData.email}
                handleChange={handleChange}
              />
              <FormInput
                type="text"
                name="firstName"
                label="Change firstname"
                value={userData.firstName}
                handleChange={handleChange}
              />
              <FormInput
                type="text"
                name="secondName"
                label="Change surname"
                value={userData.secondName}
                handleChange={handleChange}
              />
              <FormInput
                type="text"
                name="username"
                label="Change Nickname"
                value={userData.username}
                handleChange={handleChange}
              />

              <label htmlFor="icon-button-file">
                <Input
                  id="icon-button-file"
                  type="file"
                  name="phone"
                  value={userData.imageUrl}
                  onChange={handleFileRead}
                  sx={{ display: 'none' }}
                />
                <IconButton color="primary" aria-label="upload picture" component="span">
                  <PhotoCamera />
                </IconButton>
              </label>
              <Button type="submit">
                Confirm Changes
              </Button>
              <Button onClick={handleDelete} sx={{ color: 'red' }}>
                Delete Profile
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ProfileEditModal;
