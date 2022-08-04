import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Image} from 'react-native';

import Home from '../modules/home/screens';

import {Welcome, Test, Category, Scan} from '../screens';

import {COLORS, FONTS, icons, SIZES} from '../constants';

const Tab = createBottomTabNavigator();

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
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Category" component={Category} />
      <Tab.Screen name="Scan" component={Scan} />
      <Tab.Screen name="Test" component={Test} />
      <Tab.Screen name="Welcome" component={Welcome} />
    </Tab.Navigator>
  );
};

export default TabNav;
