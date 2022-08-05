import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import homeRoutes from '../modules/home/home.routes';

import {tabRoute} from './TabNav';

import productRoutes from '../modules/product/product.routes';

const Stack = createNativeStackNavigator();

const routes = [...tabRoute, ...productRoutes];

export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="TabNav"
      screenOptions={{
        headerShown: false,
      }}>
      {routes.map((item, index) => (
        <Stack.Screen name={item.name} component={item.component} key={index} />
      ))}
    </Stack.Navigator>
  );
}

export const homeStackRoute = [{name: 'HomePage', component: HomeStack}];
