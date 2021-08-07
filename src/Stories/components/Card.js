import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Fonts, FontSizes} from '../../Theme';
import Colors, {Shadow} from '../../Theme/Colors';
import ImageHolder from './ImageHolder';

const Card = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <ImageHolder uri={data.strDrinkThumb} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{data.strDrink}</Text>
        <Text style={styles.textSub}>{data.strCategory}</Text>
        <Text numberOfLines={2} style={styles.textSub2}>
          {data.strInstructions}
        </Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 5,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 5,
    flexDirection: 'row',
    ...Shadow,
  },
  card: {},
  image: {
    height: 100,
    width: 100,
    borderRadius: 5,
    // ...Shadow,
  },
  textContainer: {
    width: '70%',
    justifyContent: 'center',
    padding: 10,
  },
  text: {
    fontFamily: Fonts.BOLD,
    fontSize: FontSizes.SUB_HEAD_17,
  },
  textSub: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.NORMAL_12,
    color: Colors.PRIMERY_COLOR_DARK,
  },
  textSub2: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSizes.NORMAL_12,
    color: Colors.DARK_GRAY,
    paddingTop: 5,
  },
});
