/* eslint-disable prefer-regex-literals */
import {
  createTheme, Container, CssBaseline, Box, Avatar,
  Typography, Grid, FormControlLabel, Checkbox, Button,
} from '@mui/material';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { IUser } from '../../redux/Users/UsersInterfaces';
import { createUserStart } from '../../redux/Users/UsersActions';
import { IRootReducer } from '../../redux/RootReducer';

const theme = createTheme();

const Registration = () => {
  const [userCredentials, setUserCredentials] = useState<IUser>({
    email: '',
    password: '',
    firstName: '',
    secondName: '',
    username: '',
    phone: '',
    posts: [],
  });
  const user = useSelector((state: IRootReducer) => state.users.currentUser);
  const loginErrors = useSelector((state: IRootReducer) => state.users.errorMessage);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleChange = (event: any) => {
    const { value, name } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    dispatch(createUserStart(userCredentials));
  };
  useEffect(() => {
    ValidatorForm.addValidationRule('isEmpty', (value) => {
      if (!value.trim()) {
        return false;
      }

      return true;
    });
    ValidatorForm.addValidationRule('isPassword', (value) => {
      if (new RegExp(/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/).test(value.trim())) {
        return true;
      }

      return false;
    });
  }, []);

  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    navigate('/');
  }, [user]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          {
            loginErrors ? <div style={{ color: 'red' }}>{loginErrors as string}</div> : null
          }
          <Box sx={{ mt: 3 }}>
            <ValidatorForm
              onSubmit={handleSubmit}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextValidator
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    value={userCredentials.firstName}
                    onChange={handleChange}
                    autoFocus
                    validators={['isEmpty']}
                    errorMessages={['This field is required']}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextValidator
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="secondName"
                    value={userCredentials.secondName}
                    onChange={handleChange}
                    autoComplete="family-name"
                    validators={['isEmpty']}
                    errorMessages={['This field is required']}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextValidator
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={userCredentials.email}
                    onChange={handleChange}
                    validators={['isEmail', 'isEmpty']}
                    errorMessages={['Input valid email', 'Email must be filed']}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextValidator
                    required
                    fullWidth
                    id="number"
                    label="Phone number"
                    name="phone"
                    autoComplete="phone"
                    value={userCredentials.phone}
                    validators={['isEmpty']}
                    errorMessages={['This field is required']}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextValidator
                    fullWidth
                    name="username"
                    label="Username"
                    type="text"
                    id="userName"
                    value={userCredentials.username}
                    autoComplete="username"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextValidator
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="standard-required-passwordConfirm"
                    value={userCredentials.password}
                    autoComplete="new-password"
                    validators={['isEmpty', 'isPassword']}
                    errorMessages={['This field is required', 'Minimum eight characters, at least one letter and one numberd']}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="/signin">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </ValidatorForm>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Registration;
