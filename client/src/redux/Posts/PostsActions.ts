import postsActionsTypes from './PostsTypes';
import { ActionsTypes } from '../Interfaces';
import { IComments, IPost } from './PostsInterfaces';

export const getPostsStart = ():ActionsTypes => ({
  type: postsActionsTypes.GET_POSTS_START,
});

export const getPostsSuccess = (posts: IPost[]):ActionsTypes => ({
  type: postsActionsTypes.GET_POSTS_SUCCESS,
  payload: posts,
});

export const getPostsFailure = (error: unknown):ActionsTypes => ({
  type: postsActionsTypes.GET_POSTS_FAILURE,
  payload: error,
});

export const showNextPage = (pageNum: Number): ActionsTypes => ({
  type: postsActionsTypes.SHOW_NEXT_PAGE,
  payload: pageNum,
});

export const showPreviosPage = (): ActionsTypes => ({
  type: postsActionsTypes.SHOW_PREVIOS_PAGE,
});

export const getCommentsStart = (postId: string | undefined): ActionsTypes => ({
  type: postsActionsTypes.GET_COMMENTS_START,
  payload: postId,
});

export const getCommentsSuccess = (comments: IComments[]): ActionsTypes => ({
  type: postsActionsTypes.GET_COMMENTS_SUCCESS,
  payload: comments,
});

export const getCommentsFailure = (error: unknown): ActionsTypes => ({
  type: postsActionsTypes.GET_COMMENTS_FAILURE,
  payload: error,
});

export const createCommentStart = (post: IComments) => ({
  type: postsActionsTypes.CREATE_COMMENT_START,
  payload: post,
});

export const createCommentSuccess = (posts: IPost[]) => ({
  type: postsActionsTypes.CREATE_COMMENT_SUCCESS,
  payload: posts,
});

export const createCommentFailure = (error: unknown) => ({
  type: postsActionsTypes.CREATE_COMMENT_FAILURE,
  payload: error,
});

export const createPostStart = (post: any): ActionsTypes => ({
  type: postsActionsTypes.CREATE_POST_START,
  payload: post,
});

export const createPostSuccess = (post: IPost): ActionsTypes => ({
  type: postsActionsTypes.CREATE_POST_SUCCESS,
  payload: post,
});

export const changeCommentStart = (comment: any): ActionsTypes => ({
  type: postsActionsTypes.CHANGE_COMMENT_START,
  payload: comment,
});

export const changeCommentSuccess = (comment: IComments[]): ActionsTypes => ({
  type: postsActionsTypes.CHANGE_COMMENT_SUCCESS,
  payload: comment,
});

export const changeCommentFailure = (error: unknown): ActionsTypes => ({
  type: postsActionsTypes.CHANGE_COMMENT_FAILURE,
  payload: error,
});

export const deleteCommentStart = (id: any): ActionsTypes => ({
  type: postsActionsTypes.DELETE_COMMENT_START,
  payload: id,
});

export const deleteCommentSuccess = (comments: IComments[]): ActionsTypes => ({
  type: postsActionsTypes.DELETE_COMMENT_SUCCESS,
  payload: comments,
});

export const deleteCommentFailure = (error: unknown): ActionsTypes => ({
  type: postsActionsTypes.DELETE_COMMENT_FAILURE,
  payload: error,
});

export const getTargetPostStart = (postId: string): ActionsTypes => ({
  type: postsActionsTypes.GET_TARGET_POST_START,
  payload: postId,
});

export const getTargetPostSuccess = (post: IPost): ActionsTypes => ({
  type: postsActionsTypes.GET_TARGET_POST_SUCCESS,
  payload: post,
});

export const getTargetPostFailure = (error: unknown): ActionsTypes => ({
  type: postsActionsTypes.GET_TARGET_POST_FAILURE,
  payload: error,
});

export const deletePostStart = (postId: string): ActionsTypes => ({
  type: postsActionsTypes.DELETE_POST_START,
  payload: postId,
});

export const deletePostSuccess = (posts: IPost[]): ActionsTypes => ({
  type: postsActionsTypes.DELETE_POST_SUCCESS,
  payload: posts,
});

export const deletePostFailure = (error: unknown): ActionsTypes => ({
  type: postsActionsTypes.DELETE_POST_FAILURE,
  payload: error,
});

export const editPostStart = (body: any): ActionsTypes => ({
  type: postsActionsTypes.EDIT_POST_START,
  payload: body,
});

export const editPostSuccess = (posts: IPost[]): ActionsTypes => ({
  type: postsActionsTypes.EDIT_POST_SUCCESS,
  payload: posts,
});

export const editPostFailure = (error: unknown): ActionsTypes => ({
  type: postsActionsTypes.EDIT_POST_FAILURE,
  payload: error,
});

export const clearTargetPost = (): ActionsTypes => ({
  type: postsActionsTypes.CLEAR_TARGET_POST,
});
