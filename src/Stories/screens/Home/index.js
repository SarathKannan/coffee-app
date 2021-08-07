import React from 'react';
import {
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Colors} from '../../../Theme';
import BackButton from '../../components/BackButton';
import Card from '../../components/Card';
import ImageHolder from '../../components/ImageHolder';
import styles from './styles';

const Home = props => {
  const {
    HomeReducer: {dataList, isLoading_data},
    getDetails,
    logOutAction
  } = props;
  function _renderItem({item}) {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          getDetails(item);
        }}
        style={styles.cardMain}>
        <Card data={item} />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.imageContainer}>
        <ImageHolder style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>It's a great day for</Text>
          <Text style={styles.text}>a coffee</Text>
        </View>
        <View style={styles.logOutBtn}>
          <BackButton icon="logout" size={23} onPress={() => logOutAction()} />
        </View>
      </View>
      <View style={styles.listContainer}>
        {isLoading_data && (
          <View style={styles.topBar}>
            <ActivityIndicator size="small" color={Colors.GRAY} />
          </View>
        )}
        <FlatList
          data={dataList}
          renderItem={_renderItem}
          keyExtractor={(item, index) => index}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Home;
