import { IPost } from '../Posts/PostsInterfaces';

export interface IUserItem {
  name?: string,
  email?: string,
  phone?: string,
  id?: number | string,
}

export interface IUser extends IUserItem {
  id?: number | string,
  _id?: string,
  firstName?: string,
  username?: string,
  secondName?: string,
  email?: string,
  password?: string,
  address?: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string,
    }
  },
  phone?: string,
  website?: string,
  company?: {
    name: string,
    catchPhrase: string,
    bs: string
  },
  imageUrl?: string,
  backgroundImageUrl?: string,
  posts?: IPost[] | [],
  [x: string]: any,
}

export interface IUserInitialState {
  usersList: IUser[],
  changedUser: IUser | {},
  errorMessage: unknown,
  isCreating: Boolean,
  isLoading: Boolean,
  isGettingCurrentUser: Boolean,
  isSearching: boolean,
  currentUser: IUser,
  searchingResults: IUser[],
  targetUser: IUser,

}
