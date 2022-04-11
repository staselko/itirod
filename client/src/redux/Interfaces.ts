import { IUser } from './Users/UsersInterfaces';

export type ActionsTypes = {
  type: string,
  payload?: any;
}

export interface AuthResponse {
  accessToken: string,
  refreshToken: string,
  user: IUser,
}

export interface IErrorInitialState {
  path: string,
}
