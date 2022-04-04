import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Routes, Route, Outlet, useLocation, useNavigate,
} from 'react-router-dom';
import { checkUserAuth, getTargetUserStart } from './redux/Users/UsersActions';
import { getPostsStart, getTargetPostStart } from './redux/Posts/PostsActions';
import HeaderComponent from './components/Header/Header';
import PostsOverviewContainer from './pages/PostsOverview/PostOverviewContainer';
import UserPageContainer from './pages/User/UserContainer';
import './App.scss';
import PostViewContainer from './pages/PostView/PostViewContainer';
import Authorization from './pages/Authorization/Authorization';
import RegistrationContainer from './pages/Registration/RegistrationContainer';
import CurrentUserContainer from './pages/CurrentUser/CurrentUserContainer';
import NotFound from './pages/NotFound/NotFound';
import { responseInstance } from './http';
import { IRootReducer } from './redux/RootReducer';
import ServerError from './pages/ServerError/ServerError';
import Users from './pages/UsersList/Users';

const App: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const { path } = useSelector((state: IRootReducer) => state.errorHandling);
  const { _id } = useSelector((state: IRootReducer) => state.users.currentUser);
  const href = useLocation();
  const changeUrl = useNavigate();
  const params = href.pathname.split('/')[2];
  useEffect(() => {
    responseInstance(dispatch);
    if (localStorage.getItem('token')) {
      dispatch(checkUserAuth());
    }
  }, []);

  useEffect(() => {
    if (href.pathname === '/' && !_id) {
      changeUrl('/signin');
    }

    if (href.pathname === (`/users/${params}`)) {
      dispatch(getTargetUserStart(params as string));
    }

    if (href.pathname === (`/posts/${params}`)) {
      dispatch(getTargetPostStart(params as string));
    }

    if (href.pathname === ('/posts')) {
      dispatch(getPostsStart());
    }
  }, [href]);

  useEffect(() => {
    if (path === '/not-found') {
      changeUrl(path);
    }

    if (path === '/server-error') {
      changeUrl(path);
    }
  }, [path]);
  return (
    <div className="forum">
      <HeaderComponent />
      <Routes>
        <Route path="/posts" element={<PostsOverviewContainer />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserPageContainer />} />
        <Route path="/posts/:postId" element={<PostViewContainer />} />
        <Route path="/signin" element={<Authorization />} />
        <Route path="/reg" element={<RegistrationContainer />} />
        <Route path="/" element={<CurrentUserContainer />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/server-error" element={<ServerError />} />
      </Routes>
      <Outlet />
    </div>

  );
};

export default App;
