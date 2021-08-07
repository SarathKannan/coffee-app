import {StyleSheet} from 'react-native';
import { Colors, Fonts, FontSizes } from '../../../Theme';
import {
  deviceHeight,
  deviceWidth,
  statusBarHeight,
} from '../../../Utils/DeviceProps';

const IMAGE_HEIGHT = deviceWidth - 70;
const OVERLAP = 40;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: statusBarHeight,
  },
  image: {
    width: deviceWidth,
    height: IMAGE_HEIGHT,
    resizeMode: 'contain',
  },
  imageContainer: {},
  textContainer: {
    position: 'absolute',
    zIndex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding : 15,
    backgroundColor : "rgba(0,0,0,0.4)",
    bottom: OVERLAP + 20,
    right: 20,
  },
  text: {
    fontSize: FontSizes.HEAD_23,
    color: Colors.WHITE,
    fontFamily : Fonts.BOLD,
  },
  listContainer: {
    position: 'absolute',
    height: deviceHeight - (IMAGE_HEIGHT - statusBarHeight) + OVERLAP,
    top: IMAGE_HEIGHT - OVERLAP,
    width: '100%',
    backgroundColor: Colors.WHITE,
    zIndex: 2,
    paddingTop: OVERLAP,
    borderTopEndRadius : 35,
    borderTopStartRadius : 35,

  },
  topBar: {
    height : 20,
    width : 20,
    position : 'absolute',
    top : 10,
    right : 20,
    zIndex : 1,
  },
  cardMain : {
    paddingHorizontal : 10,
    backgroundColor : Colors.WHITE,
  },
});
export default styles;
