/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
import { createSelector } from 'reselect';
import { IRootReducer } from '../RootReducer';
import { IPost } from './PostsInterfaces';

const selectPosts = (posts: IPost[]) => posts;
const selectPostsList = ((state: IRootReducer) => state.posts.postsListToShow);
const isCommentsLoading = ((state: IRootReducer) => state.users.isGettingCurrentUser);
const selestIsPostsLoading = (state: IRootReducer) => state.posts.isLoading;

export const selectPostPage = createSelector(
  [selectPosts],
  (postsListToShow): IPost[] => postsListToShow,
);

export const selectIsPostsLoading = createSelector(
  [selestIsPostsLoading],
  (isLoading) => isLoading,
);

export const selectIsCommentsLoading = createSelector(
  [isCommentsLoading],
  (isGettingCurrentUser) => isGettingCurrentUser,
);

export const selectCurrentPost = (postId: string | undefined) => createSelector(
  [selectPostsList],
  (postsListToShow): IPost => postsListToShow.filter((item) => item._id === postId)[0],
);

export const selectUsersPosts = (userId: string | undefined | number) => createSelector(
  [selectPostsList],
  (postsListToShow): IPost[] => postsListToShow.filter((item) => item.userId === userId),
);
