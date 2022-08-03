import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const CustomButton = ({
  onPress,
  label,
  containerStyles,
  labelStyles,
  disabled,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.container, containerStyles]}>
      <Text style={[styles.lable, labelStyles]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    height: SIZES.btnHeight,
    borderRadius: SIZES.radius,
  },
  lable: {
    color: COLORS.light,
    textTransform: 'capitalize',
    ...FONTS.h3,
  },
});

export default CustomButton;
