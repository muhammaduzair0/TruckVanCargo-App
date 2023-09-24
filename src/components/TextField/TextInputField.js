import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { COLORS } from '../../../assets/constants'

const TextInputField = (props) => {
  return (
    <View>
           <TextInput
        style={[styles.input, props.borderStyle]}
        // onChangeText={onChangeText}
        // value={text}
        placeholder={props.placeHolderText}
        numberOfLines={props.numberOfLines}
        multiline={props.multiLine}
      />
    </View>
  )
}

export default TextInputField

const styles = StyleSheet.create({
    input: {
        width:330,
        height: 48,
        borderRadius:10,
        backgroundColor:COLORS.secondary
      },
    
})