import React from 'react';

import {View, StyleSheet, Text, Image} from 'react-native';

import {CustomButton} from '../../../components/core';

import {COLORS, FONTS, images, SIZES} from '../../../constants';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* logo  */}
      <View style={styles.logo}>
        <Image source={images.logo} style={styles.logoImage} />
        <Text style={[styles.logoText, styles.logoTextMain]}>welcome to</Text>
        <Text style={styles.logoText}>margaret</Text>
      </View>

      {/* get started  */}
      <View style={styles.getStarted}>
        <CustomButton
          label="get started"
          onPress={() => navigation.navigate('Walkthrough')}
        />
        <CustomButton
          label="already have an account?"
          containerStyles={{
            marginTop: SIZES.base,
            backgroundColor: null,
          }}
          labelStyles={{
            color: COLORS.primary,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light,
  },
  logo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: 180,
    height: 180,
  },
  logoText: {
    marginTop: SIZES.base,
    textTransform: 'capitalize',
    color: COLORS.dark,
    ...FONTS.h1,
  },
  logoTextMain: {
    marginTop: SIZES.padding,
  },
  getStarted: {
    paddingHorizontal: SIZES.padding,
    marginBottom: SIZES.padding,
  },
});

export default Welcome;
