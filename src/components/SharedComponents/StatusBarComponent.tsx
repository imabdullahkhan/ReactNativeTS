import React from 'react'
import { SafeAreaView, StatusBar, StatusBarStyle } from 'react-native'

// dark-content prop for Black content on StatusBar
// light-content prop for White content
type StatusBarProps = {
    backgroundColor?: string,
    barStyle?: StatusBarStyle
}


const StatusBarComponent: React.FC<StatusBarProps> = ({ backgroundColor = 'white', barStyle = "dark-content" }) => (
    <SafeAreaView style={{ backgroundColor: backgroundColor, padding: 0, margin: 0, height: StatusBar.currentHeight }}>
        <StatusBar translucent={true} backgroundColor={backgroundColor} barStyle={barStyle} />
    </SafeAreaView>
)

export default StatusBarComponent