import React from 'react'
import { Text, View } from 'react-native'
import styles from "./DetailScreen.style"

const DetailScreen: React.FC<any> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleTextStyle}>Details Screen</Text>
    </View>
  )
}

export default DetailScreen

