import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import BookmarkScreen from './screens/BookmarkScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
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
  );
}
