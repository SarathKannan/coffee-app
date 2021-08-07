import {
  GET_HOME_DATA,
  GET_HOME_DATA_FAILURE,
  GET_HOME_DATA_SUCCESS,
} from './actions';

const initialState = {
  isLoading_data: false,
  dataList: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_HOME_DATA:
      return {
        ...state,
        isLoading_data: true,
      };
    case GET_HOME_DATA_SUCCESS:
      return {
        ...state,
        isLoading_data: false,
        dataList: action.payload,
      };
    case GET_HOME_DATA_FAILURE:
      return {
        ...state,
        isLoading_data: false,
      };
    default:
      return {...state};
  }
}
