import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { COLORS } from '../assets/constants'
import Header from '../src/components/home/Header'
import TextInputField from '../src/components/TextField/TextInputField'
import images from '../assets/images'
import CategoryCard from '../src/components/categoryCard/CategoryCard'
import Button from '../src/components/Button/Button'

const Home = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Header />
        <ScrollView>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Welcome,</Text>
            <Text style={styles.subTitle}>Let’s Find Our Services!</Text>
          </View>
          <View style={styles.searchWrapper}>
            <Image source={images.searchIcon} style={styles.searchIcon} />
            <TextInputField placeHolderText={'Search Our Services'} />
          </View>
          <View style={styles.titleWrapper}>
            <Text style={styles.deliveryTitle}>What type of delivery you are booking?</Text>
          </View>
          <CategoryCard />
          <Button onPress={console.log('Button Pressed...!')} btnTitle={'NEXT'} />
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  titleWrapper: {
    marginTop: 50,
    marginHorizontal: 20,
  },
  title: {
    marginBottom: 20,
    color: COLORS.secondary,
    fontFamily: 'bold',
    fontSize: 24
  },
  subTitle: {
    color: COLORS.secondary,
    fontFamily: 'regular',
    fontSize: 16
  },
  deliveryTitle: {
    color: COLORS.secondary,
    fontFamily: 'regular',
    fontSize: 22
  },
  searchWrapper: {
    flexDirection: 'row',
    width: 335,
    height: 48,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: 50
  },
  searchIcon: {
    width: 14,
    height: 14,
    marginRight: 10,
    marginLeft: 50
  },
})

export default Home