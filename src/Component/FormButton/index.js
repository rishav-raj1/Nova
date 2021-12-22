import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Style'

const FormButton = ({buttonTitle,...rest}) => {
    return (
        <TouchableOpacity style={styles.buttonContainer} {...rest}>
        <Text style={styles.buttonText}>{buttonTitle}</Text>
      </TouchableOpacity>
    )
}

export default FormButton
