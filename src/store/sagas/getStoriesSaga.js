import {put} from 'redux-saga/effects';
import axios from 'axios';
import {
  SET_BEFORE_LIST_LOADER_VISIBLE,
  SET_LIST_LOADER_VISIBLE,
  SET_LOADER_VISIBLE,
  STORIES_LIST,
} from '../actions/actionTypes';
import {makeActions} from '../actions/makeActions';
import {baseURL} from '../../assets/utils/constants';

export function* getStoriesUserWorker() {
  try {
    const response = yield axios.get(`${baseURL}/stories?limit=20`);
    if (response.status === 200) {
      yield put(makeActions(STORIES_LIST, response.data));
      yield put(makeActions(SET_BEFORE_LIST_LOADER_VISIBLE, false));
      yield put(makeActions(SET_LOADER_VISIBLE, false));
    }
  } catch (e) {
    console.log('ERROR getStoriesUserWorker', e);
  }
}

export function* getNextPageUserWorker(data) {
  try {
    const response = yield axios.get(
      `${baseURL}/stories?limit=20&page_token=${data.payload}`,
    );
    if (response.status === 200) {
      yield put(makeActions(STORIES_LIST, response.data));
      yield put(makeActions(SET_LIST_LOADER_VISIBLE, false));
    }
  } catch (e) {
    console.log('ERROR getNextPageUserWorker', e);
  }
}
