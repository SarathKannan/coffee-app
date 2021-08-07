import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Text} from 'react-native';

import AppDefaults from './AppDefaults';
import MainNavigation from './main';
import RootNavigation from './root';
import {HIDE_SPLASH_SCREEN} from '../Service/ServiceActions';

const Navigation = props => {
  const {
    RootReducer: {isLoggedIn},
  } = props;
  useEffect(() => {
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
    Text.defaultProps.style = {fontSize: 12};
    props.dispatch({type: HIDE_SPLASH_SCREEN});
    return () => {};
  }, []);
  return (
    <>
      <AppDefaults {...props}>
        {isLoggedIn ? <MainNavigation /> : <RootNavigation />}
      </AppDefaults>
    </>
  );
};

const mapStateToProps = state => ({
  RootReducer: state.RootReducer,
});

export default connect(mapStateToProps)(Navigation);
