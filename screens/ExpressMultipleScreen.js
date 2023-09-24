import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../assets/constants'
import ExpressHeader from '../src/components/expressMultiple/ExpressHeader'
import TextInputField from '../src/components/TextField/TextInputField'
import MobileNumberPicker from '../src/components/mobileNumberPicker/MobileNumberPicker'
import images from '../assets/images'
import CheckBoxes from '../src/components/checkBox/CheckBox'
import DropdownComponent from '../src/components/dropwDown/DropDownData'
import Button from '../src/components/Button/Button'
import DatePickerComponent from '../src/components/DateTimePicker/DatePickerComponent'
import TimePickerComponent from '../src/components/DateTimePicker/TimePickerComponent'

const data = [
    { label: 'Box', value: 'Box' },
    { label: 'Grocery Bag(s)', value: 'Grocery' },
];
const weightData = [
    { label: 'Pound', value: 'Pound' },
    { label: 'Kilogram', value: 'Kilogram' },
];


const ExpressMultipleScreen = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [weightValue, setWeightValue] = useState(null);
    const [weightIsFocus, setWeightIsFocus] = useState(false);

console.log(value , "VALUE")
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <ExpressHeader />
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>Pickup Details</Text>
                    <Text style={styles.subTitle}>Your Name / Company</Text>
                    <TextInputField
                        borderStyle={{ borderWidth: 1, borderColor: "#B2BAC6", paddingLeft: 10, width: 370 }}
                        placeHolderText={'Your Name / Company'}
                    />
                    <Text style={styles.subTitle}>Mobile Number</Text>
                    <MobileNumberPicker />

                </View>
                <View style={{ marginTop: 70, marginHorizontal: 20 }}>
                    <Text style={styles.title}>Pickup Location</Text>
                    <View style={styles.locationWrapper}>
                        <TextInputField
                            borderStyle={{ paddingLeft: 20, height: 38 }}
                            placeHolderText={'Pickup Address'}
                        />
                        <View style={styles.locationIconBar}>
                            <Image source={images.locationIcon} style={styles.locationIcon} />
                        </View>
                    </View>
                </View>
                <View style={styles.checkBoxWrapper}>
                    <View>
                        <CheckBoxes titleOne={'Inside Pickup'} titleTwo={'Lifted Gate'} />
                    </View>
                    <View style={{ marginTop: 25 }}>
                        <Text style={styles.additionalText}>Additional Charges</Text>
                        <Text style={styles.additionalText}>Additional Charges</Text>
                    </View>
                </View>
                <View style={{ marginHorizontal: 20 }}>
                    <Text style={[styles.subTitle, {marginTop:5}]}>Enter Date</Text>
                    <View style={styles.dateWrapper}>
                            <DatePickerComponent />
                    </View>
                </View>
                <View style={{ marginHorizontal: 20 }}>
                    <Text style={[styles.subTitle, {marginTop:5}]}>Pickup Time</Text>
                    <View style={styles.timeWrapper}>
                            <TimePickerComponent />
                    </View>
                </View>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>Shipment Details</Text>
                    <Text style={styles.subTitle}>Parcel Type</Text>
                    <DropdownComponent
                        isFocus={isFocus}
                        setIsFocus={setIsFocus}
                        data={data}
                        value={value}
                        setValue={setValue}
                        dropDownStyles={{ width: 370 }}
                    />
                </View>
                {value == 'Box' ? <View style={styles.titleWrapper}>
                    <Text style={styles.subTitle}>Number Of Box</Text>
                    <TextInputField
                        borderStyle={{ paddingLeft: 10, borderWidth: 1, width: 370, borderColor: COLORS.neautralGray }}
                        placeHolderText="Number Of Box"
                    />
                </View> :
                    <View style={styles.titleWrapper}>
                        <Text style={styles.subTitle}>Number Of Grocery Bag(s)</Text>
                        <TextInputField
                            borderStyle={{ paddingLeft: 10, borderWidth: 1, width: 370, borderColor: COLORS.neautralGray }}
                            placeHolderText="Number Of Grocery Bag(s)"
                        />
                    </View>}
                <View style={styles.titleWrapper}>
                    <Text style={styles.subTitle}>Number of Stop</Text>
                    <TextInputField
                        borderStyle={{ paddingLeft: 10, borderWidth: 1, width: 370, borderColor: COLORS.neautralGray }}
                        placeHolderText="Number of Stop"
                    />
                </View>
                <View style={styles.titleWrapper}>
                    <Text style={styles.subTitle}>Enter Weight</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <TextInputField
                            borderStyle={{ paddingLeft: 10, borderWidth: 1, width: 161, borderColor: COLORS.neautralGray }}
                            placeHolderText="Enter Weight"
                        />
                        <DropdownComponent
                            isFocus={weightIsFocus}
                            setIsFocus={setWeightIsFocus}
                            data={weightData}
                            value={weightValue}
                            setValue={setWeightValue}
                            dropDownStyles={{ width: 180 }}
                        />
                    </View>
                </View>
                <View style={styles.titleWrapper}>
                    <Text style={styles.subTitle}>Special Instruction</Text>
                    <TextInputField
                        numberOfLines={50}
                        multiLine={true}
                        borderStyle={{ paddingTop: 10, textAlignVertical: 'top', marginBottom: 20, height: 200, paddingLeft: 10, borderWidth: 1, width: 370, borderColor: COLORS.neautralGray }}
                        placeHolderText="Write your instruction..."
                    />
                </View>
                <View>
                    <Button onPress={console.log('Button Pressed...!')} btnTitle={'NEXT'} btnTextStyle={{ color: COLORS.secondary }} btnStyle={{ backgroundColor: COLORS.primary }} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ExpressMultipleScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.secondary,
    },
    titleWrapper: {
        marginHorizontal: 20,
        marginTop: 30
    },
    title: {
        color: COLORS.primary,
        fontFamily: 'semiBold',
        fontSize: 22,
    },
    subTitle: {
        marginTop: 10,
        marginBottom: 5,
        fontFamily: 'semiBold',
        fontSize: 16
    },
    locationWrapper: {
        flexDirection: 'row',
        width: 370,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#B2BAC6',
        borderWidth: 1,
        marginTop: 20
    },
    dateWrapper: {
        flexDirection: 'row',
        width: 180,
        height: 48,
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#B2BAC6',
        borderWidth: 1,
      marginBottom: 10,
    },
    timeWrapper: {
        flexDirection: 'row',
        width: 140,
        height: 48,
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#B2BAC6',
        borderWidth: 1,
        // marginTop: 20,
    },
    locationIconBar: {
        backgroundColor: COLORS.primary,
        borderRadius: 80,
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    locationIcon: {
        width: 9,
        height: 14,
        backgroundColor: COLORS.primary,
        borderRadius: 15,
    },
    checkBoxWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 20
    },
    additionalText: {
        color: 'red',
        fontFamily: 'semiBold',
        fontSize: 14,
        marginBottom: 20
    }
})