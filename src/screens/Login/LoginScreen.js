import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>LoginScreen</Text>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#AAC0FA',
        //backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      },
})