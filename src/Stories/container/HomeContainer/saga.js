import {call, put, takeLatest} from 'redux-saga/effects';
import {url} from '../../../config';
import {useGet} from '../../../Hooks/useGet';
import {
  GET_HOME_DATA,
  GET_HOME_DATA_FAILURE,
  GET_HOME_DATA_SUCCESS,
} from './actions';

function* getData() {
  try {
    const response = yield call(useGet, url);
    if (response !== null) {
      const _data = response?.drinks;
      yield put({type: GET_HOME_DATA_SUCCESS, payload: _data});
    } else {
      console.log('Error: No response from server');
      yield put({type: GET_HOME_DATA_FAILURE});
    }
  } catch (error) {
    console.log(error);
    yield put({type: GET_HOME_DATA_FAILURE});
  }
}

export function* get_home_data() {
  yield takeLatest(GET_HOME_DATA, getData);
}
