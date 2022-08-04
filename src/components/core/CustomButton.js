import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const CustomButton = ({
  onPress,
  label,
  containerStyles,
  labelStyles,
  disabled,
  loading,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.container, containerStyles]}>
      {loading ? (
        <ActivityIndicator color="#fff" size="large" />
      ) : (
        <Text style={[styles.lable, labelStyles]}>{label}</Text>
      )}
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
