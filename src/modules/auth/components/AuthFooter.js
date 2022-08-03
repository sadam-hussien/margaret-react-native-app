import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../constants';

const AuthFooter = ({label, btn, onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
        <Text style={styles.btnText}>{btn}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZES.margin,
  },
  label: {
    textTransform: 'capitalize',
    color: COLORS.grey,
    ...FONTS.body4,
  },
  btnContainer: {
    marginLeft: SIZES.base,
  },
  btnText: {
    textTransform: 'capitalize',
    color: COLORS.secondary,
    ...FONTS.body4,
  },
});

export default AuthFooter;
