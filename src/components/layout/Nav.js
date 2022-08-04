import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const Nav = () => {
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Link title="products" active />
        <Link title="my chart" />
        <Link title="services" />
      </View>
    </View>
  );
};

const Link = ({title, link, active}) => {
  return (
    <TouchableOpacity style={styles.Link}>
      <Text
        style={[
          styles.linkText,
          {color: active ? COLORS.secondary : COLORS.light},
        ]}>
        {title}
      </Text>
      {active && <View style={styles.activeLink}></View>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.padding,
    marginVertical: SIZES.padding,
  },
  nav: {
    flexDirection: 'row',
  },
  Link: {
    marginRight: SIZES.margin,
  },
  linkText: {
    textTransform: 'capitalize',
    ...FONTS.body3,
  },
  activeLink: {
    width: 50,
    height: 2,
    backgroundColor: COLORS.secondary,
    marginTop: SIZES.base,
  },
});

export default Nav;
