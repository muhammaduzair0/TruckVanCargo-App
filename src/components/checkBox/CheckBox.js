import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../../assets/constants';

export default function CheckBoxes(props) {
  const [isCheckedOne, setCheckedOne] = useState(false);
  const [isCheckedTwo, setCheckedTwo] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isCheckedOne} onValueChange={setCheckedOne} color={isCheckedOne ? COLORS.neautralGray : undefined} />
        <Text style={styles.paragraph}>{props.titleOne}</Text>
      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isCheckedTwo}
          onValueChange={setCheckedTwo}
          color={isCheckedTwo ? COLORS.neautralGray : undefined}
        />
        <Text style={styles.paragraph}>{props.titleTwo}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 14,
    fontFamily:'semiBold',
    color: '#18191A',
  },
  checkbox: {
    margin: 8,
  },
});
