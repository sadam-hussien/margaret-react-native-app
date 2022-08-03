import React from 'react';
import {View, StyleSheet, TextInput, Image} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const InputWithIcon = ({
  secure = false,
  value,
  handleChange,
  handleBlur,
  name,
  icon,
  placeholder,
  placeholderColor = COLORS.grey,
  inputStyles,
  containerStyles,
  iconStyles,
}) => {
  return (
    <View style={[styles.container, containerStyles]}>
      <Image source={icon} style={[styles.iconStyles, iconStyles]} />
      <TextInput
        secureTextEntry={secure}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        value={value}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        style={[styles.inputStyle, inputStyles]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.grey20,
    paddingHorizontal: SIZES.base,
    borderRadius: 8,
    marginBottom: SIZES.margin,
  },
  iconStyles: {
    width: 35,
    height: 35,
    tintColor: COLORS.primary,
    marginRight: SIZES.base,
  },
  inputStyle: {
    flex: 1,
    ...FONTS.body3,
  },
});

export default InputWithIcon;
