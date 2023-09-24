import React, { useState } from 'react'
import { TouchableOpacity, Image, Text } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import images from '../../../assets/images'

export default DatePickerComponent = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(true);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
    setShow(true)
  };

  return (
    <>
      {/* <Text>{date.toLocaleString()}</Text> */}
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
     
       <TouchableOpacity onPress={() => showDatepicker()}>
        <Image style={{width: 18, height: 18, marginHorizontal:10}} source={images.calendarIcon}/>
        </TouchableOpacity>
      </>
  );
};