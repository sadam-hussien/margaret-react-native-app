import React from 'react';

import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

import {COLORS, FONTS, icons, SIZES} from '../../../constants';

const SectionHead = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.link}>
        <Text style={styles.linkText}>see more</Text>
        <Image source={icons.chevron_right} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding,
    marginBottom: SIZES.base,
  },
  title: {
    textTransform: 'capitalize',
    color: COLORS.dark,
    ...FONTS.h3,
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: COLORS.grey,
  },
  linkText: {
    textTransform: 'capitalize',
    color: COLORS.grey,
    ...FONTS.body3,
  },
});

export default SectionHead;
