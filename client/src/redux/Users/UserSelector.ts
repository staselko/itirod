import { createSelector } from 'reselect';
import { IRootReducer } from '../RootReducer';
import { IUser } from './UsersInterfaces';

const usersWithPosts = ((store: IRootReducer) => store.users.usersList);
const loading = ((store: IRootReducer) => store.users.isLoading);
const creating = ((store: IRootReducer) => store.users.isCreating);
const getting = ((store: IRootReducer) => store.users.isGettingCurrentUser);

export const selectCurrentUser = (id: any) => createSelector(
  [usersWithPosts],
  // eslint-disable-next-line no-underscore-dangle
  (userWithPosts): IUser => userWithPosts.filter((user) => user._id === id)[0],
);

export const selectIsUsersLoading = createSelector(
  [loading],
  (isLoading) => isLoading,
);

export const selectIsUsersCreating = createSelector(
  [creating],
  (isCreating) => isCreating,
);

export const selectIsGettingCurrentUser = createSelector(
  [getting],
  (isGettingCurrentUser) => isGettingCurrentUser,
);

export const selectUserFromSearch = (searcingValue: string) => createSelector(
  [usersWithPosts],
  (usersList): IUser[] => usersList.filter((user) => user.firstName?.toLocaleLowerCase()
    .includes(searcingValue.toLocaleLowerCase())),
);
