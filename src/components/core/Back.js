import React from 'react';

import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {COLORS, FONTS, icons, SIZES} from '../../constants';

const Back = () => {
  const {goBack} = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={() => goBack()}>
        <Image source={icons.arrow_left} style={styles.img} />
        <Text style={styles.text}>back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SIZES.padding,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 25,
    height: 20,
    tintColor: COLORS.primary,
  },
  text: {
    textTransform: 'capitalize',
    color: COLORS.primary,
    marginLeft: SIZES.base,
    ...FONTS.h3,
  },
});

export default Back;
