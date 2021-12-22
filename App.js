import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import ImageText from './src/Component/ImageText';
import ParentProps from './src/Component/Props/ParentProps';
import Profile from './src/Component/Profile';
import StateForm from './src/Component/StateForm/StateForm';
import NewTest from './src/Component/newTest';

const App = () => {
  return (
    <View style={styles.container}>
      <StateForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //backgroundColor: '#AAC0FA',
    backgroundColor: 'white',
    margin: 0,
    borderRadius: 10,
    flex: 1,
  },
});

export default App;
