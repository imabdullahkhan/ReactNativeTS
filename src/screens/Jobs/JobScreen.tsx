import React from 'react'
import { Text, View } from 'react-native'
import styles from "./Jobs.style"

const JobScreen: React.FC<any> = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleTextStyle}>Jobs Screen</Text>
        </View>
    )
}

export default JobScreen

