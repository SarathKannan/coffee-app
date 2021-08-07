import {StyleSheet} from 'react-native';
import {Colors, Fonts, FontSizes} from '../../../Theme';
import {
  deviceHeight,
  deviceWidth,
  statusBarHeight,
} from '../../../Utils/DeviceProps';

const IMAGE_HEIGHT = deviceHeight / 1.8;
const OVERLAP = 40;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F5FCFF',
  },
  image: {
    width: deviceWidth,
    height: IMAGE_HEIGHT,
    resizeMode: 'contain',
  },
  detailsContainer: {
    position: 'absolute',
    height: deviceHeight - (IMAGE_HEIGHT - statusBarHeight) + OVERLAP,
    top: IMAGE_HEIGHT - OVERLAP,
    width: '100%',
    backgroundColor: Colors.WHITE,
    zIndex: 2,
    paddingTop: OVERLAP,
    borderTopEndRadius: 35,
    borderTopStartRadius: 35,
  },
  details: {
    paddingHorizontal: 15,
  },
  detailsHeadText: {
    fontSize: FontSizes.HEAD_24,
    color: '#000',
    fontFamily: Fonts.BLACK,
  },
  detailsCateText: {
    fontSize: FontSizes.NORMAL_13,
    color: Colors.PRIMERY_COLOR_DARK,
    fontFamily: Fonts.REGULAR,
    paddingTop: 5,
  },
  description: {
    paddingHorizontal: 15,
    paddingTop: 15,
    flex: 1,
  },
  description2 : {
    marginTop: 10,
    flex : 1
  },
  discriptionHeadText: {
    fontSize: FontSizes.SUB_HEAD_16,
    color: Colors.BLACK,
    fontFamily: Fonts.BLACK,
    paddingTop: 5,
  },
  descriptionText: {
    fontSize: FontSizes.NORMAL_14,
    color: Colors.BLACK,
    fontFamily: Fonts.REGULAR,
    textAlign : 'justify',
    lineHeight : 20
  },
});
export default styles;
