import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import images from '../../../assets/images'
import { COLORS } from '../../../assets/constants'

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={images.menuIcon} style={styles.menuIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.bellIconBar}>
          <Image source={images.bellIcon} style={styles.bellIcon} />

        <View style={styles.notificationAlert}></View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    alignItems: 'center',
    marginTop: 58
  },
  menuIcon: {
    width: 18,
    height: 15
  },
  bellIcon: {
    width: 15,
    height: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bellIconBar: {
    backgroundColor: COLORS.secondary,
    borderRadius: 80,
    width: 33,
    height: 33,
    alignItems: 'center',
    justifyContent: 'center'
  },
  notificationAlert: {
    backgroundColor: '#77FC6B',
    width: 9,
    height: 9,
    borderRadius: 80,
    position: 'absolute',
    bottom: 26,
    left: 22,
    zIndex: 999
  }
})

export default Header