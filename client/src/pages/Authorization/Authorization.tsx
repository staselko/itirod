import {
  Grid, CssBaseline, Paper, Box, Avatar, Typography, TextField, FormControlLabel, Checkbox, Button,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './Authorization.scss';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserStart } from '../../redux/Users/UsersActions';
import { IRootReducer } from '../../redux/RootReducer';

const theme = createTheme();

const Authorization = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isFirstRender = useRef(true);
  const user = useSelector((state: IRootReducer) => state.users.currentUser);
  const loginErrors = useSelector((state: IRootReducer) => state.users.errorMessage);
  const [userCredantials, setUserCredantials] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event: any) => {
    const { value, name } = event.target;

    setUserCredantials({ ...userCredantials, [name]: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    dispatch(loginUserStart(userCredantials));

    setUserCredantials({
      ...userCredantials,
      password: '',
    });
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    navigate('/');
  }, [user]);

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            {
                loginErrors ? <div style={{ color: 'red' }}>{loginErrors as string}</div> : null
            }
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={userCredantials.email}
                onChange={handleChange}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={userCredantials.password}
                onChange={handleChange}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" checked />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="/reg">
                    Have no account?
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Authorization;
