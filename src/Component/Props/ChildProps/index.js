import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Touchable,
  TouchableOpacityBase,
  ScrollView,
} from 'react-native';

const ChildProps = props => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.design}>{props.SuperHeroName}</Text>
      <Text style={styles.design}>{props.status}</Text>
      <Image
        style={styles.img}
        source={{uri: 'https://wallpapercave.com/wp/wp9346150.jpg'}}
      />

      <Text style={styles.design}>Bittu Kumar</Text>
      <Image
        style={styles.img}
        source={{uri: 'https://wallpapercave.com/wp/wp9346150.jpg'}}
      />

      <Text style={styles.design}>Bittu Kumar</Text>
      <Image
        style={styles.img}
        source={{uri: 'https://wallpapercave.com/wp/wp9346150.jpg'}}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    backgroundColor: 'orange',
    flex: 1,
    borderRadius: 10,
  },
  design: {
    fontSize: 28,
    fontWeight: '500',
    textAlign: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  img: {
    // width: '40%',
    // height: '40%',
    // borderRadius: 20,
    // resizeMode: 'contain',
    // justifyContent: 'center',
    // alignSelf: 'center',

    width: 200,
    height: 280,
    marginTop: 10,
    marginLeft: 0,
    borderRadius: 10,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default ChildProps;
