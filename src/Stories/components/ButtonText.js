import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const ButtonText = ({
  text = '',
  textStyle = {},
  buttonStyle = {},
  onPress = () => {},
  isLoading = false,
  loaderColor = '#fff',
}) => {
  return isLoading ? (
    <View style={[styles.button, buttonStyle]}>
      <ActivityIndicator size="small" color={loaderColor} />
    </View>
  ) : (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={textStyle ? textStyle : styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonText;

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    color: 'white',
  },
});
