// @flow
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Home from '../../screens/Home';
import { GET_HOME_DATA, GET_ITEM_DETAILS } from './actions';

const HomeContainer = props => {
  const {
    navigation,
    HomeReducer: {dataList},
    getHomeData
  } = props;
  useEffect(() => {
    getHomeData();
    return () => {};
  }, []);

  return <Home navigation={navigation} {...props} />;
};

function bindAction(dispatch) {
  return {
    getHomeData: () => dispatch({type: GET_HOME_DATA}),
    getDetails: (data) => dispatch({type: GET_ITEM_DETAILS, data}),
  };
}

const mapStateToProps = state => ({
  HomeReducer: state.HomeReducer,
});

export default connect(mapStateToProps, bindAction)(HomeContainer);
