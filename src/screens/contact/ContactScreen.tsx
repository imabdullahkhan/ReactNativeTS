import React from 'react'
import { Text, View } from 'react-native'
import styles from "./Contact.style"

const ContactScreen: React.FC<any> = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleTextStyle}>Contact Screen</Text>
        </View>
    )
}

export default ContactScreen

