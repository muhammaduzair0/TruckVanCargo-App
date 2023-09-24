import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../assets/constants'

const Button = (props) => {
  return (
        <TouchableOpacity onPress={() => props.onPress} style={[styles.btnWrapper, props.btnStyle]}>
            <Text style={[styles.btnTitle, props.btnTextStyle]}>{props.btnTitle}</Text>
        </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    btnWrapper:{
        flex:1,
        justifyContent:'center',
        alignSelf:'center',
        alignItems:'center',
        backgroundColor:COLORS.secondary,
        width:370,
        height:48,
        borderRadius:15,
        marginVertical:50
    },
    btnTitle:{
        fontFamily:'bold',
        color: COLORS.primary,
        fontSize:16
    }
})