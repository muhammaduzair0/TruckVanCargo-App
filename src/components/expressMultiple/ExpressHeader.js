import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import images from '../../../assets/images'
import { COLORS } from '../../../assets/constants'
import { useNavigation } from '@react-navigation/native';

const ExpressHeader = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.HeaderWrapper}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image style={styles.goBackIcon} source={images.goBack} />
            </TouchableOpacity>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>Express Multiple Delivery</Text>
            </View>
        </View>
    )
}

export default ExpressHeader

const styles = StyleSheet.create({
    HeaderWrapper: {
        flexDirection: 'row',
        marginRight: 60,
        marginTop: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    goBackIcon: {
        width: 10,
        height: 20
    },
    titleWrapper: {
        alignItems: 'center',
        marginLeft: 40
    },
    title: {
        alignContent: 'center',
        fontFamily: 'semiBold',
        fontSize: 18,
        color: COLORS.charcoalGray
    }
})