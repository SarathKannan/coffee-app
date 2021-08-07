// @flow
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Details from '../../screens/Details';

const DetailsContainer = props => {
  const {navigation} = props;
  return <Details navigation={navigation} {...props} />;
};

function bindAction(dispatch) {
  return {};
}

const mapStateToProps = state => ({
  HomeReducer: state.HomeReducer,
});

export default connect(mapStateToProps, bindAction)(DetailsContainer);
