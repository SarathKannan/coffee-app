import AsyncStorage from '@react-native-async-storage/async-storage';
import {put, takeLatest, select, call} from 'redux-saga/effects';
import {useToast} from '../../../Hooks/useToast';
import {Messages} from '../../../Utils/Messages';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
} from './actions';

function* loginAction(data) {
  console.log(data);
  try {
    const state = yield select();
    const {defaultEmail, defaultPassword} = state.RootReducer.userData;
    const {email, password} = data.data;
    if (defaultEmail === email && defaultPassword === password) {
      yield put({type: LOGIN_SUCCESS});
    } else {
      yield put({type: LOGIN_FAILURE});
      yield call(useToast, Messages.wrongPasswordOrEmail);
    }
  } catch (error) {
    console.log(error);
    yield put({type: LOGIN_FAILURE});
  }
}

export function* request_login() {
  yield takeLatest(LOGIN_REQUEST, loginAction);
}

function* logoutAction() {
  try {
    console.log("logoutAction");
    AsyncStorage.clear();
  } catch (error) {
    console.log(error);
  }
}

export function* request_logout() {
  yield takeLatest(LOGOUT_REQUEST, logoutAction);
}
