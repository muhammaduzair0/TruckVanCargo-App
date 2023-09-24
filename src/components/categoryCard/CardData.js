import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../../assets/constants'
import { useNavigation } from '@react-navigation/native';

const CardData = (props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.cardContainer}>
            <TouchableOpacity
                onPress={() => navigation.navigate(props.nav)}
                style={[styles.cardWrapper, { backgroundColor: props.isActive == true ? COLORS.aquaBlue : COLORS.secondary }]}>
                <Image style={styles.cardIcon}
                    source={props.img}
                />
                <Text style={styles.title}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CardData

const styles = StyleSheet.create({
    cardContainer: {
        marginLeft: 20,
    },
    cardWrapper: {
        paddingHorizontal: 10,
        width: 126,
        height: 126,
        backgroundColor: COLORS.secondary,
        borderRadius: 15,
        justifyContent: 'center',
        marginVertical: 20
    },
    cardIcon: {
        width: 40,
        height: 40
    },
    title: {
        marginTop: 10,
        color: COLORS.primary,
        fontFamily: 'semiBold',
        fontSize: 14
    }
})