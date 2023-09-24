import React, { useState } from 'react';
import { View, Text } from 'react-native';
import PhoneInput from 'react-native-international-phone-number';
import { COLORS } from '../../../assets/constants';

export default function MobileNumberPicker() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [inputValue, setInputValue] = useState('');

  function handleInputValue(phoneNumber) {
    setInputValue(phoneNumber);
  }

  function handleSelectedCountry(country) {
    setSelectedCountry(country);
  }

  return (
    <View style={{ width: '100%', flex: 1, }}>
      <PhoneInput
        value={inputValue}
        onChangePhoneNumber={handleInputValue}
        selectedCountry={selectedCountry}
        onChangeSelectedCountry={handleSelectedCountry}
        containerStyle={{borderColor:'#B2BAC6'}}
        flagContainerStyle={{backgroundColor:COLORS.secondary}}
        placeholder='760 277 7575'
      />
    </View>
  );
}