import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import homeReducer from '../Stories/container/HomeContainer/reducer';
import RootReducer from '../Stories/container/RootContainer/reducer';
import serviceReducer from '../Service/ServiceReducer';

const config = {
  key: 'root',
  storage: AsyncStorage,
};
const service_config = {
  key: 'service',
  storage: AsyncStorage,
};

const HomeReducer = persistReducer(config, homeReducer);
const ServiceReducer = persistReducer(service_config, serviceReducer);

const appReducer = combineReducers({
  HomeReducer,
  ServiceReducer,
  RootReducer,
});
const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
