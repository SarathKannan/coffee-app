import React from 'react';
import {View, Text, StatusBar, ScrollView} from 'react-native';
import BackButton from '../../components/BackButton';
import ImageHolder from '../../components/ImageHolder';
import Space from '../../components/Space';
import styles from './styles';

const Details = props => {
  const {
    HomeReducer: {itemDetails},
    navigation,
  } = props;
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View>
        <ImageHolder style={styles.image} uri={itemDetails.strDrinkThumb} />
        <BackButton size={23} onPress={() => navigation.goBack(null)} />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.details}>
          <Text style={styles.detailsHeadText}>{itemDetails.strDrink}</Text>
          <Text style={styles.detailsCateText}>{itemDetails.strCategory}</Text>
        </View>
        <View style={styles.description}>
          <Text style={styles.discriptionHeadText}>Description</Text>
          <Space height={15} />

          <ScrollView >
            <View style={styles.description2}>
              <Text style={styles.descriptionText}>
                {itemDetails.strInstructions}
              </Text>
              <Space height={20} />
              <Text style={styles.descriptionText}>
                {itemDetails.strInstructionsDE}
              </Text>
              <Space height={20} />
              <Text style={styles.descriptionText}>
                {itemDetails.strInstructionsIT}
              </Text>
            </View>
            <Space height={20} />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Details;
