import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../constants';

const AuthTitle = ({label}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: SIZES.padding,
  },
  label: {
    textAlign: 'center',
    textTransform: 'capitalize',
    color: COLORS.dark,
    ...FONTS.h1,
  },
});

export default AuthTitle;
