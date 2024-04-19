import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import {store, persistor} from './store';
import HomeScreen from './screens/HomeScreen';
import BookmarkScreen from './screens/BookmarkScreen';
import {PersistGate} from 'redux-persist/integration/react';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarLabelStyle: {
                fontSize: 20,
                paddingVertical: 10,
              },
            }}>
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{tabBarIcon: () => null}}
            />
            <Tab.Screen
              name="Bookmarks"
              component={BookmarkScreen}
              options={{tabBarIcon: () => null}}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
