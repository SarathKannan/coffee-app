import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import homeReducer from '../Stories/container/HomeContainer/reducer';
import _rootReducer from '../Stories/container/RootContainer/reducer';
import ServiceReducer from '../Service/ServiceReducer';
import {LOGOUT_REQUEST} from '../Stories/container/RootContainer/actions';

const config = {
  key: 'root',
  storage: AsyncStorage,
};
const root_config = {
  key: 'root_config',
  storage: AsyncStorage,
};

const HomeReducer = persistReducer(config, homeReducer);
const RootReducer = persistReducer(root_config, _rootReducer);

const appReducer = combineReducers({
  HomeReducer,
  ServiceReducer,
  RootReducer,
});
const rootReducer = (state, action) => {
  if (action.type === LOGOUT_REQUEST) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
