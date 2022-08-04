import React from 'react';

import {View, StyleSheet, Image, TextInput} from 'react-native';

import {COLORS, FONTS, icons, SIZES} from '../../constants';

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Image source={icons.search} style={styles.icon} />
        <TextInput
          placeholder="Search Product"
          placeholderTextColor={COLORS.grey}
          style={styles.input}
        />
        <Image source={icons.camera} style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.padding,
  },
  search: {
    backgroundColor: COLORS.light,
    flexDirection: 'row',
    alignItems: 'center',
    height: 65,
    borderRadius: SIZES.radius,
    paddingHorizontal: SIZES.radius,
  },
  icon: {
    width: 35,
    height: 35,
  },
  input: {
    flex: 1,
    height: '100%',
    paddingHorizontal: SIZES.base,
    color: COLORS.dark,
    ...FONTS.body3,
  },
});

export default Search;
