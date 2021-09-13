import React, { useEffect } from 'react'
import { Image, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteNames } from '../constants/routeNames';
import TopStories from '../screens/TopStories/TopStoriesScreen';
import NewStoriesScreen from '../screens/NewStories/NewStoriesScreen';
import BestStoriesScreen from '../screens/BestStories/BestStoriesScreen';
import JobScreen from '../screens/Jobs/JobScreen';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrophy, faFolderPlus, faBriefcase, faHeart, } from '@fortawesome/free-solid-svg-icons'
import { fontFamily, fontH3V3, primaryColor } from '../theme/styles';
import { normalizeWithScale } from '../utils/fontUtil';
import DetailScreen from '../screens/detail/DetailScreen';
import { store } from '../redux/store';
import { getIds } from '../redux/action';
import { StoriesType } from '../constants/enum';

const Tab = createBottomTabNavigator();
const getTabItemIcon = (route: any, focused: any) => {
    if (route.name === RouteNames.User.TopStories) {
        return (
            <FontAwesomeIcon
                icon={faTrophy}
                color={!focused ? '#2B3D5F40' : primaryColor}
                size={normalizeWithScale(22)}
            />
        )
    }
    if (route.name === RouteNames.User.NewStories) {
        return (
            <FontAwesomeIcon
                icon={faFolderPlus}
                color={!focused ? '#2B3D5F40' : primaryColor}
                size={normalizeWithScale(22)}
            />)
    }
    if (route.name === RouteNames.User.BestStories) {
        return (<FontAwesomeIcon
            icon={faHeart}
            color={!focused ? '#2B3D5F40' : primaryColor}
            size={normalizeWithScale(22)}
        />)
    }
    if (route.name === RouteNames.User.Jobs) {
        return (
            <FontAwesomeIcon
                icon={faBriefcase}
                color={!focused ? '#2B3D5F40' : primaryColor}
                size={normalizeWithScale(22)}
            />)
    }
}

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
                        return (
                            getTabItemIcon(route, focused)
                        )
                    },
                })}
            >
                <Tab.Screen name={RouteNames.User.Jobs} component={JobScreen} />
                <Tab.Screen name={RouteNames.User.BestStories} component={BestStoriesScreen} />
                {/* <Tab.Screen name={RouteNames.User.Detail} component={DetailScreen} /> */}
                <Tab.Screen name={RouteNames.User.TopStories} component={TopStories} />
                <Tab.Screen name={RouteNames.User.NewStories} component={NewStoriesScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default CustomTabNavigator
