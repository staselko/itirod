import {
  AppBar, Container, Toolbar, Typography, Box,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import logo from '../../assets/images/Logo.png';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import HeaderSearch from '../HeaderSearch/HeaderSearch';

import './Header.scss';

const HeaderComponent = () => (
  <AppBar position="static">
    <Container maxWidth="xl">
      <Toolbar
        disableGutters
      >
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ mr: 2, zIndex: 1233232 }}
        >
          <Link to="/"><img src={logo} className="forum__header-logo" alt="logo" /></Link>
        </Typography>

        <Box sx={{ flexGrow: 1, zIndex: 1233232 }}>
          <Link to="/posts" className="forum__header-link-item">
            <ArticleOutlinedIcon sx={{
              fontSize: 40,
              color: '#fff',
              mr: '15px',
            }}
            />

          </Link>
          <Link to="/users" className="forum__header-link-item">
            <PeopleOutlineIcon sx={{
              fontSize: 40,
              color: '#fff',
            }}
            />

          </Link>
        </Box>
        <HeaderSearch />
        <HamburgerMenu />
      </Toolbar>
    </Container>
  </AppBar>
);

export default HeaderComponent;
