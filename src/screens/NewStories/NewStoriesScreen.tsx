import React from 'react'
import { Text, View } from 'react-native'
import styles from "./NewStories.style"

const NewStoriesScreen: React.FC<any> = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleTextStyle}>New Stories Screen</Text>
        </View>
    )
}

export default NewStoriesScreen

