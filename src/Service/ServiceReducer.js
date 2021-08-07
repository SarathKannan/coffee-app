import SplashScreen from 'react-native-splash-screen';
import {HIDE_SPLASH_SCREEN} from './ServiceActions';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case HIDE_SPLASH_SCREEN:
      setTimeout(() => {
        SplashScreen.hide();
      }, 50);
      return {
        ...state,
      };

    default:
      return {...state};
  }
}
