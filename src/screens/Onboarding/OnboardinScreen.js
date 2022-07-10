import {View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react'

const OnboardinScreen = ({navigation}) => {
  return (
    
          <SafeAreaView style={styles.container}>
            <Text style={{color: "green", fontFamily:'Roboto-MediumItalic', fontSize: 18}}>
              Rishav Kumar
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{margin: 10}}>
                  <AntDesign size={30} name={'downcircle'} color="yellow" />
                </TouchableOpacity>
          </SafeAreaView>
       
  )
}

export default OnboardinScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#AAC0FA',
        //backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      },
})