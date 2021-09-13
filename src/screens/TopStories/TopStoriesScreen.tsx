import React from 'react'
import { Text, View } from 'react-native'
import styles from "./TopStories.style"

const TopStories: React.FC<any> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleTextStyle}>Top Stories Screen</Text>
    </View>
  )
}

export default TopStories

