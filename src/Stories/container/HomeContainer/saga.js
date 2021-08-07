import {
    call,
    put,
    takeEvery,
    takeLatest,
    fork,
    select,
    delay,
  } from 'redux-saga/effects';

  function* selectNotification(data) {
    try {
        
    } catch (error) {}
  }
  
  export function* select_Notification() {
    yield takeLatest('SELECT_NOTIFICATIONS', selectNotification);
  }