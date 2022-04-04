import { all, call } from 'redux-saga/effects';
import { postsSaga } from './Posts/PostsSaga';
import { usersSaga } from './Users/UsersSagas';

export default function* rootSaga() {
  yield all([
    call(postsSaga),
    call(usersSaga),
  ]);
}
