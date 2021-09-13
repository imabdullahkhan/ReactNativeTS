import React from 'react'
import { Text, View } from 'react-native'
import styles from "./Album.style"

const AlbumScreen: React.FC<any> = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleTextStyle}>Home Screen</Text>
        </View>
    )
}

export default AlbumScreen

