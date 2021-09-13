import React from 'react';
import {
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import StatusBarComponent from './src/components/SharedComponents/StatusBarComponent';
import TabNavigator from './src/navigators/TabNavigator';
import { persistor, store } from "./src/redux/store"
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux";
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <Provider store={store} >
        <PersistGate loading={null} persistor={persistor}>
          <StatusBarComponent barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <TabNavigator />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
