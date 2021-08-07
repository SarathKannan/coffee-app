import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {statusBarHeight} from '../../Utils/DeviceProps';

const BackButton = ({
  size = 22,
  backgroundColor = 'transparent',
  iconColor = '#ffffff',
  onPress = () => {},
  mode = 0,
}) => {
  return mode === 1 ? (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: statusBarHeight + 60,
        backgroundColor: 'rgba(0,0,0,0.7)',
      }}>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: backgroundColor,
          // backgroundColor: 'gray',
          padding: 8,
          position: 'absolute',
          top: statusBarHeight + 10,
          left: 10,
          zIndex: 10,
        }}
        onPress={onPress}>
        <AntDesign name="back" size={size} color={iconColor} />
      </TouchableOpacity>
    </View>
  ) : (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: backgroundColor,
        // backgroundColor: 'gray',
        padding: 8,
        position: 'absolute',
        top: statusBarHeight + 10,
        left: 10,
        zIndex: 10,
      }}
      onPress={onPress}>
      <AntDesign name="back" size={size} color={iconColor} />
    </TouchableOpacity>
  );
};

export default BackButton;
