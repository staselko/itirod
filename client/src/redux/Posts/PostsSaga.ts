import {
  takeLatest, call, all, put,
} from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import postsActionsTypes from './PostsTypes';

import {
  changeCommentFailure, changeCommentSuccess, createCommentFailure,
  createCommentSuccess, createPostSuccess,
  deleteCommentFailure, deleteCommentSuccess,
  getTargetPostSuccess, getCommentsSuccess,
  getPostsFailure, getPostsSuccess,
  getTargetPostFailure, deletePostFailure,
  deletePostSuccess,
  editPostFailure,
  editPostSuccess,
} from './PostsActions';
import { ActionsTypes } from '../Interfaces';
import $api from '../../http';

export function* getPosts(): SagaIterator {
  try {
    const postFromServer = yield call($api.get, '/posts?page=1');
    yield put(
      getPostsSuccess(postFromServer.data),
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(getPostsFailure(error.message));
    }
  }
}

export function* getComments({ payload }: ActionsTypes): SagaIterator {
  try {
    const comments = yield call($api.get, `/comments/${payload}`);
    yield put(
      getCommentsSuccess(comments.data),
    );
  } catch (error) {
    yield put(
      getPostsFailure(error),
    );
  }
}

export function* createComment({ payload }: ActionsTypes): SagaIterator {
  try {
    const newComment = yield call($api.post, '/comments', payload);
    yield put(
      createCommentSuccess(newComment.data),
    );
  } catch (error) {
    yield put(
      createCommentFailure(error),
    );
  }
}

export function* createPost({ payload }: any): SagaIterator {
  try {
    const newPosts = yield call($api.post, '/posts', payload, {
      headers: { 'content-type': 'multipart/form-data', 'Access-Control-Allow-Origin': '*' },
    });

    yield put(
      createPostSuccess(newPosts.data),
    );
  } catch (error) {
    yield put(
      getPostsFailure(error),
    );
  }
}

export function* changeComment({ payload }: ActionsTypes): SagaIterator {
  try {
    const changedComment = yield call($api.patch, '/comments', payload);
    yield put(
      changeCommentSuccess(changedComment.data),
    );
  } catch (error) {
    yield put(
      changeCommentFailure(error),
    );
  }
}

export function* deleteComment({ payload }: ActionsTypes): SagaIterator {
  try {
    const comments = yield call($api.delete, '/comments', { data: { ...payload } });
    yield put(
      deleteCommentSuccess(comments.data),
    );
  } catch (error) {
    yield put(
      deleteCommentFailure(error),
    );
  }
}

export function* getTargetPost({ payload }: ActionsTypes): SagaIterator {
  try {
    const post = yield call($api.get, `/posts/${payload}`);
    yield put(
      getTargetPostSuccess(post.data),
    );
  } catch (error) {
    yield put(
      getTargetPostFailure(error),
    );
  }
}

export function* deletePost({ payload }: ActionsTypes): SagaIterator {
  try {
    const posts = yield call($api.delete, `/posts/${payload}`);
    yield put(
      deletePostSuccess(posts.data.posts),
    );
  } catch (error) {
    yield put(
      deletePostFailure(error),
    );
  }
}

export function* editPost({ payload }: ActionsTypes): SagaIterator {
  try {
    const posts = yield call($api.patch, '/posts', payload);
    yield put(
      editPostSuccess(posts.data),
    );
  } catch (error) {
    yield put(
      editPostFailure(error),
    );
  }
}

export function* onGetPostsStart() {
  yield takeLatest(postsActionsTypes.GET_POSTS_START, getPosts);
}

export function* onGetCommentsStart() {
  yield takeLatest(postsActionsTypes.GET_COMMENTS_START, getComments);
}

export function* onCreateCommentStart() {
  yield takeLatest(postsActionsTypes.CREATE_COMMENT_START, createComment);
}

export function* onCreatePostStart() {
  yield takeLatest(postsActionsTypes.CREATE_POST_START, createPost);
}

export function* onChangeCommentStart() {
  yield takeLatest(postsActionsTypes.CHANGE_COMMENT_START, changeComment);
}

export function* onDeleteCommentStart() {
  yield takeLatest(postsActionsTypes.DELETE_COMMENT_START, deleteComment);
}

export function* onGetTargetPostStart() {
  yield takeLatest(postsActionsTypes.GET_TARGET_POST_START, getTargetPost);
}

export function* onDeletePostStart() {
  yield takeLatest(postsActionsTypes.DELETE_POST_START, deletePost);
}

export function* onEditPostStart() {
  yield takeLatest(postsActionsTypes.EDIT_POST_START, editPost);
}

export function* postsSaga() {
  yield all([
    call(onGetPostsStart),
    call(onGetCommentsStart),
    call(onCreateCommentStart),
    call(onCreatePostStart),
    call(onChangeCommentStart),
    call(onDeleteCommentStart),
    call(onGetTargetPostStart),
    call(onDeletePostStart),
    call(onEditPostStart),
  ]);
}
