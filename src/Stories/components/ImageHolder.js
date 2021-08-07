import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import images from '../../../assets/images';
import {deviceWidth} from '../../Utils/DeviceProps';

const defaultImage = images.BACKGROUND_IMAGE;

const ImageHolder = ({source, uri, style}) => {
  const image =
    source ||
    (uri && {uri, priority: FastImage.priority.normal}) ||
    defaultImage;
  return (
    <View>
      <FastImage
        source={image}
        style={style ? style : styles.image}
        resizeMode={FastImage.resizeMode.cover}
      />
    </View>
  );
};

export default ImageHolder;

const styles = StyleSheet.create({
  image: {
    width: deviceWidth,
    height: deviceWidth - 70,
    resizeMode: 'contain',
  },
});
