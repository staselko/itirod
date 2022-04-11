export interface IComments {
  postId?: string,
  body: String,
  firstName?: string,
  secondName?: string,
  imageUrl?: string,
  userId?: number | string,
  _id?: string,
}

export interface IPost {
  userId?: string | number,
  id: number | string,
  title: String,
  body?: String,
  imageUrl?: String,
  comments?: IComments[]
  [x: string]: any,
}

export interface PostsInitialState {
  postsListToShow: IPost[],
  comments: IComments[],
  errorMessage?: unknown,
  isLoading: Boolean,
  isCommenting: Boolean,
  targetPost: any,
}
