/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import StatusBarComponent from './src/components/SharedComponents/StatusBarComponent';
import TabNavigator from './src/navigators/TabNavigator';
import { primaryColor } from './src/theme/styles';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <StatusBarComponent barStyle={'light-content'} backgroundColor={primaryColor} />
      <TabNavigator />
    </>
  );
};

export default App;
