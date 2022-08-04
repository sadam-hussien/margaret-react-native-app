import React from 'react';

import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

import {useRoute} from '@react-navigation/native';

import {images, icons, COLORS, SIZES, FONTS} from '../../constants';

const Header = () => {
  const {name} = useRoute();
  return (
    <View style={styles.header}>
      {/* logo  */}
      <View style={styles.logo}>
        <Image source={images.logo} style={styles.logoImage} />
        <Text style={styles.name}>{name}</Text>
      </View>
      {/* header-options  */}
      <View style={styles.headerOptions}>
        <TouchableOpacity style={styles.optionBtn}>
          <Image source={icons.bell} style={styles.optionIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionBtn}>
          <Image source={icons.shoppingCart} style={styles.optionIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.primary,
    padding: SIZES.padding,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImage: {
    width: 40,
    height: 40,
  },
  name: {
    marginLeft: SIZES.radius,
    color: COLORS.light,
    ...FONTS.h2,
  },
  headerOptions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionBtn: {
    marginLeft: SIZES.base,
  },
  optionIcon: {
    width: 25,
    height: 25,
  },
});

export default Header;
