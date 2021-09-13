import React from 'react'
import { Image, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteNames } from '../constants/routeNames';
import HomeScreen from '../screens/home/HomeScreen';
import NewsFeedScreen from '../screens/newsfeed/NewsFeed';
import ContactScreen from '../screens/contact/ContactScreen';
import AlbumScreen from '../screens/album/AlbumScreen';
import DetailScreen from '../screens/detail/DetailScreen';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCog, faHome, faMapMarkerAlt, faStickyNote } from '@fortawesome/free-solid-svg-icons'
import { fontFamily, fontH3V3, primaryColor } from '../theme/styles';
import { normalizeWithScale } from '../utils/fontUtil';

const Tab = createBottomTabNavigator();

const CustomTabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarLabel: ({ focused }) => {
                        return (
                            <Text
                                style={{
                                    fontSize: fontH3V3,
                                    fontFamily: fontFamily.Primary.Regular,
                                    color: !focused ? '#2B3D5F40' : primaryColor,
                                }}>
                                {route.name}
                            </Text>
                        )
                    },
                    tabBarIcon: ({ focused, color, size }) => {
                        if (route.name === RouteNames.User.Home) {
                            return (
                                <FontAwesomeIcon
                                    icon={faHome}
                                    color={!focused ? '#2B3D5F40' : primaryColor}
                                    size={normalizeWithScale(22)}
                                />
                            )
                        }
                        if (route.name === RouteNames.User.NewsFeed) {
                            return (
                                <FontAwesomeIcon
                                    icon={faStickyNote}
                                    color={!focused ? '#2B3D5F40' : primaryColor}
                                    size={normalizeWithScale(22)}
                                />)
                        }
                        if (route.name === RouteNames.User.Contacts) {
                            return (<FontAwesomeIcon
                                icon={faMapMarkerAlt}
                                color={!focused ? '#2B3D5F40' : primaryColor}
                                size={normalizeWithScale(22)}
                            />)
                        }
                        if (route.name === RouteNames.User.Albums) {
                            return (
                                <FontAwesomeIcon
                                    icon={faCog}
                                    color={!focused ? '#2B3D5F40' : primaryColor}
                                    size={normalizeWithScale(22)}
                                />)
                        }
                        if (route.name === RouteNames.User.Details) {
                            return (
                                <FontAwesomeIcon
                                    icon={faCog}
                                    color={!focused ? '#2B3D5F40' : primaryColor}
                                    size={normalizeWithScale(22)}
                                />)
                        }
                    },
                })}
            >
                <Tab.Screen name={RouteNames.User.Details} component={DetailScreen} />
                <Tab.Screen name={RouteNames.User.Home} component={HomeScreen} />
                <Tab.Screen name={RouteNames.User.NewsFeed} component={NewsFeedScreen} />
                <Tab.Screen name={RouteNames.User.Contacts} component={ContactScreen} />
                <Tab.Screen name={RouteNames.User.Albums} component={AlbumScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default CustomTabNavigator
