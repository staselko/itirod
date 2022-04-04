import { ActionsTypes } from '../Interfaces';
import allUsersActionTypes from './UsersTypes';
import { IUser } from './UsersInterfaces';

type userCredential = {
  email: string,
  password: string,
}

export const getUsersStart = (page: any): ActionsTypes => ({
  type: allUsersActionTypes.GET_USERS_START,
  payload: page,
});

export const getUsersSuccess = (users: IUser[]): ActionsTypes => ({
  type: allUsersActionTypes.GET_USERS_SUCCESS,
  payload: users,
});

export const getUsersFailure = (error: unknown): ActionsTypes => ({
  type: allUsersActionTypes.GET_USERS_FAILURE,
  payload: error,
});

export const changeUserProfileStart = (changedUser: IUser): ActionsTypes => ({
  type: allUsersActionTypes.CHANGE_USER_PROFILE_START,
  payload: changedUser,
});

export const changeUserProfileSuccess = (changedUser: IUser): ActionsTypes => ({
  type: allUsersActionTypes.CHANGE_USER_PROFILE_SUCCESS,
  payload: changedUser,
});

export const changeUserProfileFailure = (error: unknown): ActionsTypes => ({
  type: allUsersActionTypes.CHANGE_USER_PROFILE_FAILURE,
  payload: error,
});

export const toggleSearchingField = () :ActionsTypes => ({
  type: allUsersActionTypes.TOGGLE_SEARCHING_FIELD,
});

export const closeSearchingField = () : ActionsTypes => ({
  type: allUsersActionTypes.CLOSE_SEARCHING_FIELD,
});

export const createUserStart = (newUser: IUser): ActionsTypes => ({
  type: allUsersActionTypes.CREATE_USER_START,
  payload: newUser,
});

export const createUserSuccess = (newUser: IUser): ActionsTypes => ({
  type: allUsersActionTypes.CREATE_USER_SUCCESS,
  payload: newUser,
});

export const createUserFailure = (error: unknown): ActionsTypes => ({
  type: allUsersActionTypes.CREATE_USER_FAILURE,
  payload: error,
});

export const loginUserStart = (credentials: userCredential): ActionsTypes => ({
  type: allUsersActionTypes.LOGIN_USER_START,
  payload: credentials,
});

export const loginUserSuccess = (user: IUser): ActionsTypes => ({
  type: allUsersActionTypes.LOGIN_USER_SUCCESS,
  payload: user,
});

export const loginUserFailure = (error: unknown): ActionsTypes => ({
  type: allUsersActionTypes.LOGIN_USER_FAILURE,
  payload: error,
});

export const checkUserAuth = (): ActionsTypes => ({
  type: allUsersActionTypes.CHECK_USER_AUTH,
});

export const logoutUserStart = (): ActionsTypes => ({
  type: allUsersActionTypes.LOGOUT_USER_START,
});

export const logoutUserSuccess = (): ActionsTypes => ({
  type: allUsersActionTypes.LOGOUT_USER_SUCCESS,
});

export const logoutUserFailure = (error: unknown): ActionsTypes => ({
  type: allUsersActionTypes.LOGOUT_USER_FAILURE,
  payload: error,
});

export const deleteUserStart = (url: string | number | undefined): ActionsTypes => ({
  type: allUsersActionTypes.DELETE_USER_START,
  payload: url,
});

export const deleteUserSuccess = (users: IUser[]): ActionsTypes => ({
  type: allUsersActionTypes.DELETE_USER_SUCCESS,
  payload: users,
});

export const deleteUserFailure = (error: unknown): ActionsTypes => ({
  type: allUsersActionTypes.DELETE_USER_FAILURE,
  payload: error,
});

export const getTargetUserStart = (userId: string) => ({
  type: allUsersActionTypes.GET_TARGET_USER_START,
  payload: userId,
});

export const getTargetUserSuccess = (user: IUser) => ({
  type: allUsersActionTypes.GET_TARGET_USER_SUCCESS,
  payload: user,
});

export const getTargetUserFailure = (error: unknown) => ({
  type: allUsersActionTypes.GET_TARGET_USER_FAILURE,
  payload: error,
});

export const searchUserStart = (searchingValue: string) => ({
  type: allUsersActionTypes.SEARCH_USER_START,
  payload: searchingValue,
});

export const searchUserSuccess = (searchingResults: IUser[]) => ({
  type: allUsersActionTypes.SEARCH_USER_SUCCESS,
  payload: searchingResults,
});

export const searchUserFailure = (error: any) => ({
  type: allUsersActionTypes.SEARCH_USER_FAILURE,
  payload: error,
});

export const clearTargetUser = () => ({
  type: allUsersActionTypes.CLEAR_TARGET_USER,
});
