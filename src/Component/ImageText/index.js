import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import styles from './Style';

const ImageText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bittu Kumar</Text>
      <Image
        style={styles.img}
        source={require('../../assets/Images/Rishav.jpeg')}
        // source={{uri: 'https://wallpapercave.com/wp/wp9346150.jpg'}}
      />
    </View>
  );
};

export default ImageText;
