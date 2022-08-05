import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Image} from 'react-native';

import test2Routes from '../modules/test2/test.routes';

import testRoutes from '../modules/test/test.routes';

import categoryRoutes from '../modules/category/category.routes';

import scanRoutes from '../modules/scan/scan.routes';

import homeRoutes from '../modules/home/home.routes';

import {COLORS, FONTS, icons, SIZES} from '../constants';

const Tab = createBottomTabNavigator();

const routes = [
  ...homeRoutes,
  ...categoryRoutes,
  ...scanRoutes,
  ...testRoutes,
  ...test2Routes,
];

const TabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          elevation: 0,
          borderTopWidth: 1,
          borderTopColor: COLORS.dark20,
          backgroundColor: COLORS.light,
          height: 80,
          padding: SIZES.base,
        },
        tabBarIcon: ({focused, iconColor, iconName}) => {
          if (route.name === 'Home') {
            iconColor = focused ? COLORS.primary : COLORS.grey;
            iconName = icons.cube;
          } else if (route.name === 'Category') {
            iconColor = focused ? COLORS.primary : COLORS.grey;
            iconName = icons.globe;
          } else if (route.name === 'Scan') {
            iconColor = focused ? COLORS.primary : COLORS.grey;
            iconName = icons.scan;
          } else if (route.name === 'Test') {
            iconColor = focused ? COLORS.primary : COLORS.grey;
            iconName = icons.gift;
          } else {
            iconColor = focused ? COLORS.primary : COLORS.grey;
            iconName = icons.person2;
          }
          return (
            <Image
              source={iconName}
              style={{tintColor: iconColor, width: 35, height: 25}}
            />
          );
        },
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          marginTop: 4,
          color: COLORS.grey,
          ...FONTS.h4,
        },
      })}>
      {routes.map((item, index) => (
        <Tab.Screen name={item.name} component={item.component} key={index} />
      ))}
    </Tab.Navigator>
  );
};

export default TabNav;

export const tabRoute = [
  {
    name: 'TabNav',
    component: TabNav,
  },
];
