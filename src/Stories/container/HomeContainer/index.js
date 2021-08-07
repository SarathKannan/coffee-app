// @flow
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Home from '../../screens/Home';

const HomeContainer = props => {
  const {navigation} = props;

  return <Home navigation={navigation} {...props} />;
};

function bindAction(dispatch) {
  return {};
}

const mapStateToProps = state => ({
  HomeReducer: state.HomeReducer,
});

export default connect(mapStateToProps, bindAction)(HomeContainer);
