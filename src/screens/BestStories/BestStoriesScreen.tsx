import React from 'react'
import { Text, View } from 'react-native'
import styles from "./BestStories.style"

const BestStoriesScreen: React.FC<any> = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleTextStyle}>Best Stories Screen</Text>
        </View>
    )
}

export default BestStoriesScreen

