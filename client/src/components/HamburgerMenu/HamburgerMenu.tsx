import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box, Tooltip, IconButton, Avatar, Menu, MenuItem,
} from '@mui/material';
import './HamburgerMenu.scss';
import { useDispatch, useSelector } from 'react-redux';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { IRootReducer } from '../../redux/RootReducer';
import { logoutUserStart } from '../../redux/Users/UsersActions';

const HamburgerMenu = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const user = useSelector((state: IRootReducer) => state.users.currentUser);
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logoutUserStart());
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src={user.imageUrl} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px', textAlign: 'left' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem
          onClick={handleCloseUserMenu}
          sx={{
            padding: 0,
            ':hover': {
              backgroundColor: '#fff',
            },
          }}
          className="forum__hamburger-menu"
        >
          <Link to="/" className="forum__hamburger-menu-link-item">
            <div>Profile</div>
            <PersonOutlineIcon />
          </Link>
          {
            user.email
              ? (
                <div onClick={handleClick} className="forum__hamburger-menu-link-item">
                  <div>Log out</div>
                  <LogoutIcon />
                </div>
              )
              : (
                <Link to="/signin" className="forum__hamburger-menu-link-item">
                  <div>Sign in</div>
                  <LoginIcon />
                </Link>
              )
          }
        </MenuItem>

      </Menu>
    </Box>
  );
};

export default HamburgerMenu;
