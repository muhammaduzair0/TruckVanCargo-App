import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { COLORS } from '../../../assets/constants';


const DropdownComponent = (props) => {

  const renderLabel = () => {
    if (props.value || props.isFocus) {
      return (
        <></>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, props.isFocus && { borderColor: 'blue', }, props.dropDownStyles]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        //   iconStyle={styles.iconStyle}
        data={props.data}
        //   search
        maxHeight={300}
        labelField="label"
        valueField="value"
        //   placeholder={!isFocus ? 'Select item' : '...'}
        //   searchPlaceholder="Search..."
        value={props.value}
        onFocus={() => props.setIsFocus(true)}
        onBlur={() => props.setIsFocus(false)}
        onChange={item => {
          props.setValue(item.value);
          props.setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={props.isFocus ? 'blue' : 'black'}
            //   name="Safety"
            size={20}
          />
        )}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 10,
  },
  dropdown: {
    height: 50,
    borderColor: COLORS.neautralGray,
    borderWidth: 0.5,
    borderRadius: 8,
    // width:180,
    paddingRight: 5
  },
  placeholderStyle: {
    fontSize: 16,
    color: COLORS.neautralGray,
    paddingHorizontal: 5,
  },
  selectedTextStyle: {
    fontSize: 16,
    paddingLeft: 10,
  },
});