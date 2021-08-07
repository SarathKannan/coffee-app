import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from './actions';

const initialState = {
  userData: {
    defaultEmail: 'qwerty@gmail.com',
    defaultPassword: 'qwerty123',
  },
  loading_login: false,
  isLoggedIn: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading_login: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading_login: false,
        isLoggedIn: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading_login: false,
      };
    default:
      return {...state};
  }
}
