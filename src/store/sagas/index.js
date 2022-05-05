import {all, takeEvery} from 'redux-saga/effects';
import {getNextPageUserWorker, getStoriesUserWorker} from './getStoriesSaga';
import {GET_NEXT_PAGE, GET_STORIES_LIST} from '../actions/actionTypes';

function* storiesWatcher() {
  yield takeEvery(GET_STORIES_LIST, getStoriesUserWorker);
  yield takeEvery(GET_NEXT_PAGE, getNextPageUserWorker);
}

export function* rootWatcher() {
  yield all([storiesWatcher()]);
}
