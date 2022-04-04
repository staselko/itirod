import {
  Box, Button, Collapse,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import FormInput from '../FormInput/FormInput';
import { IRootReducer } from '../../redux/RootReducer';
import HeaderSearchUserList from '../HeaderSearchUserList/HeaderSearchUserList';
import { closeSearchingField, searchUserStart, toggleSearchingField } from '../../redux/Users/UsersActions';

import './HeaderSearch.scss';

const HeaderSearch = () => {
  const [searchingValue, setSearchingValue] = useState('');
  const isSearching = useSelector((store: IRootReducer) => store.users.isSearching);
  const dispatch = useDispatch();
  const location = useLocation();

  const handleChange = (event: any) => {
    const { value } = event.target;
    setSearchingValue(value);
    dispatch(searchUserStart(searchingValue));
  };

  useEffect(() => {
    dispatch(closeSearchingField());
    setSearchingValue('');
  }, [location]);

  const handleClick = () => {
    dispatch(toggleSearchingField());
  };

  const select = useSelector((state: IRootReducer) => state.users.searchingResults);

  return (
    <div className="forum__header-search">
      <Box
        component="form"
        sx={{
          '& > :not(style)': {
            m: 1,
            width: ['5ch', '25ch'],
          },
        }}
        noValidate
        autoComplete="off"
      >
        <Box sx={{
          height: 40,
          display: 'flex',
          flexDirection: 'row-reverse',
          width: ['5ch', '25ch'],
        }}
        >
          <Button onClick={handleClick} sx={{ color: '#fff' }}><SearchIcon /></Button>
          <Box
            sx={{
              '& > :not(style)': {
                display: 'flex',
                justifyContent: 'space-around',
                height: 40,
                width: 300,
              },
            }}
          >
            <div className="forum__header-search_mobile">
              <Collapse
                in={isSearching}
                orientation="horizontal"
                sx={{ transitionDuration: 400 }}
              >
                <FormInput
                  title="search"
                  name="searchingValue"
                  value={searchingValue}
                  handleChange={handleChange}
                  className="form-input-header"
                />
              </Collapse>
            </div>
          </Box>
        </Box>
      </Box>
      {
        isSearching
          ? (
            <div className="forum__header-search-result">
              {
          searchingValue && isSearching

            ? select.map((user) => <HeaderSearchUserList key={user._id} {...user} />)
            : <h2 className="forum__header-search-result-error">Type username</h2>
        }
            </div>
          ) : null
      }
    </div>
  );
};

export default HeaderSearch;
