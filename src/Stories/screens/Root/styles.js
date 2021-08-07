import {StyleSheet} from 'react-native';
import {FontSizes, Colors, Fonts} from '../../../Theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  head: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  headText: {
    color: Colors.PRIMERY_COLOR_DARK,
    fontSize: FontSizes.XTRA_LAEGE_30,
    fontWeight: 'bold',
    fontFamily: Fonts.HEAVY,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  bodyText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'gray',
    width: '100%',
  },
  footerText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PRIMERY_COLOR_BUTTON,
    width: '100%',
    padding: 15,
  },
  buttonText: {
    color: Colors.WHITE,
    fontFamily: Fonts.REGULAR,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: Colors.GRAY,
    borderRadius: 3,
    borderBottomWidth: 1,
    color: Colors.BLACK,
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.SUB_HEAD_16,
  },
  forgotPasswordContainer: {
    height: 30,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  forgotPasswordText: {
    color: Colors.PRIMERY_COLOR_BUTTON,
    fontSize: FontSizes.NORMAL_12,
    fontFamily: Fonts.REGULAR,
  },
  forgotPasswordButton: {
    padding: 5,
  },
  signUpContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    color: Colors.DARK_GRAY,
    fontSize: FontSizes.NORMAL_12,
    fontFamily: Fonts.REGULAR,
  },
  signUpButton: {
    padding: 5,
  },
  signUpContainerText: {
    color: Colors.PRIMERY_COLOR_BUTTON,
    fontSize: FontSizes.NORMAL_12,
    fontFamily: Fonts.REGULAR,
  },
  signUpButtonText: {
    color: Colors.PRIMERY_COLOR_BUTTON,
    fontSize: FontSizes.NORMAL_12,
    fontFamily: Fonts.REGULAR,
  },
});
export default styles;
