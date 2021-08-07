import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Colors, Fonts, FontSizes} from '../../Theme';

const Input = ({
  textInputContainerStyle = {},
  onChangeText = () => {},
  value = '',
  placeholder = '',
  placeholderTextColor = Colors.GRAY,
  keyboardType = 'default',
  maxLength = null,
  autoCapitalize = null,
  label = '',
  onFocus = () => {},
  onBlur = () => {},
  errorText = '',
  isError = false,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, textInputContainerStyle]}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        keyboardType={keyboardType}
        maxLength={maxLength}
        autoCapitalize={autoCapitalize}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {isError && <Text style={styles.error}>{errorText}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
  },
  label: {
    color: Colors.DARK_GRAY,
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.NORMAL_12,
  },
  error: {
    color: 'red',
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.NORMAL_12,
  },
});
