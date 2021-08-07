import {call, put, takeLatest} from 'redux-saga/effects';
import {url} from '../../../config';
import {useGet} from '../../../Hooks/useGet';
import * as Navigation from '../../../Navigation/navigationService';
import ScreenNames from '../../screens/ScreenNames';
import {
  GET_HOME_DATA,
  GET_HOME_DATA_FAILURE,
  GET_HOME_DATA_SUCCESS,
  GET_ITEM_DETAILS,
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



function* getDetails() {
  try {
    Navigation.navigate(ScreenNames.Details);
  } catch (error) {
    console.log(error);
    yield put({type: GET_HOME_DATA_FAILURE});
  }
}

export function* get_details_data() {
  yield takeLatest(GET_ITEM_DETAILS, getDetails);
}
