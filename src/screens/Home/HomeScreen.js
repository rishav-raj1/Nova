import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';


const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={{color:"black"}}>HomeScreen</Text>
      <TouchableOpacity style={{margin: 10}}>
                  <AntDesign size={30} name={'downcircle'} color="yellow" />
                </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#AAC0FA',
        //backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      },
})