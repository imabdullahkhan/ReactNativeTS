import React from 'react'
import { Text, View } from 'react-native'
import styles from "./HomeScreen.style"

const HomeScreen: React.FC<any> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleTextStyle}>Home Screen</Text>
    </View>
  )
}

export default HomeScreen

