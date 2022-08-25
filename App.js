/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {store} from './src/Redux';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import {AppProvider} from './src/contexts/AppContext';
import {RootNavigation} from './src/routes/rootNavigation';

const App = () => {
  return (
    <AppProvider>
      <Provider store={store}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <RootNavigation />
      </Provider>
    </AppProvider>
  );
};

export default App;
