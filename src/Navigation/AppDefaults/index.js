import React from 'react';
import {View, StatusBar} from 'react-native';

export default function AppDefaults(props) {
  const {children} = props;

  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle={'dark-content'}
        hidden={false}
        backgroundColor={'transparent'}
        translucent={true}
      />
      {children}
    </View>
  );
}
