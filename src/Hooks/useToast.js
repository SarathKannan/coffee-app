import {Platform, ToastAndroid} from 'react-native';

export const useToast = (message = '') => {
  if (Platform.OS === 'android') {
    return ToastAndroid.show(message, ToastAndroid.SHORT);
  }
  return null;
};
