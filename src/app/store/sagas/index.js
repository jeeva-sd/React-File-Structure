import { all } from 'redux-saga/effects';
import counterSaga from './counterSagas';

export default function* rootSaga() {
    yield all([
        counterSaga(),
    ]);
}
