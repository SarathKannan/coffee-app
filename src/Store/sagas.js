import {all, fork} from 'redux-saga/effects';
import * as Home from '../Stories/container/HomeContainer/saga';
import * as Root from '../Stories/container/RootContainer/saga';

// import * as Services from '../services/saga';


export default function* rootSaga() {
  yield all([
    ...Object.values(Home), 
    ...Object.values(Root)
].map(fork));
}
