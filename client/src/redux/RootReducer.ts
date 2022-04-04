import { combineReducers } from 'redux';
import errorsHandling from './Errors/ErrorsReducer';
import { IErrorInitialState } from './Interfaces';
import { PostsInitialState } from './Posts/PostsInterfaces';
import postsReducer from './Posts/PostsReducer';
import { IUserInitialState } from './Users/UsersInterfaces';
import usersReducer from './Users/UsersReducer';

export interface IRootReducer {
  posts: PostsInitialState,
  users: IUserInitialState,
  errorHandling: IErrorInitialState,
}

const rootReducer = combineReducers<IRootReducer>({
  posts: postsReducer,
  users: usersReducer,
  errorHandling: errorsHandling,
});

export default rootReducer;
