import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import welcomeRoutes from '../modules/welcome/welcome.routes';

import walkthroughRoutes from '../modules/walkthrough/walkthrough.routes';

import authRoutes from '../modules/auth/auth.routes';

import homeRoutes from '../modules/home/home.routes';

// routes
const routes = [
  ...welcomeRoutes,
  ...walkthroughRoutes,
  ...authRoutes,
  ...homeRoutes,
];

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}>
        {routes.map((item, index) => (
          <Stack.Screen
            name={item.name}
            component={item.component}
            key={index}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
