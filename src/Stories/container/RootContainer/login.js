// @flow
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Login from '../../screens/Root/Login';
import {LOGIN_REQUEST} from './actions';

const LoginContainer = props => {
  const {navigation} = props;

  return <Login navigation={navigation} {...props} />;
};

function bindAction(dispatch) {
  return {
    goLogin: data => dispatch({type: LOGIN_REQUEST, data}),
  };
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, bindAction)(LoginContainer);
