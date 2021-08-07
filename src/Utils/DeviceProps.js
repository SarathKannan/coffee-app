import {Dimensions, StatusBar} from 'react-native';

export const deviceHeight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;
export const statusBarHeight = StatusBar.currentHeight;
export const screenHeight = Dimensions.get('window').height - statusBarHeight;
export const screenPixel = screenHeight / 100;
