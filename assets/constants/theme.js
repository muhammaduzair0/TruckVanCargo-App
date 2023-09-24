import { Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window');

const COLORS = {
  primary: "#00225C",
  secondary: "#FFFFFF",
  aquaBlue: '#34CCFF',
  black: '#000000',
  charcoalGray: '#18191A',
  neautralGray: '#777E96'
};

const SIZES = {
    height,
    width
}

export {COLORS, SIZES}