import { View, FlatList } from 'react-native'
import React from 'react'
import categoryData from '../../../assets/data/categoryCardData'
import CardData from './CardData'

const CategoryCard = () => {
  return (
    <View>
      <FlatList
        numColumns={2}
        data={categoryData}
        renderItem={(a) => {
          const { item } = a
          return (
            <CardData
              nav={item.nav}
              isActive={item.isActive}
              title={item.title}
              img={item.image}
              key={item.id}
            />
          )
        }}
      />
    </View>
  )
}

export default CategoryCard
