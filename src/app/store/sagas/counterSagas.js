import { call, put, takeLatest } from 'redux-saga/effects';
import { setPost } from '../reducers/counterSlice';
import { http } from '../../utils';

export function* fetchPosts() {
    const { data } = yield call(() => http.get('todos/1'));
    yield put(setPost(data));
}

function* counterSaga() {
    yield takeLatest('counter/setPostRequest', fetchPosts);
}

export default counterSaga;