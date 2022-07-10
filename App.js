import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';


const App = () => {
  return (
    <View style={styles.container}>
      <Text>
        Rishav Kumar
      </Text>
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
