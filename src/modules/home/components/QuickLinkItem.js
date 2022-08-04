import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../constants';

const QuickLinkItem = ({data}) => {
  return (
    <TouchableOpacity style={styles.item}>
      <View style={[styles.itemImage, {backgroundColor: data.color}]}>
        <Image source={data.icon} style={styles.img} />
      </View>
      <Text style={styles.itemTitle}>{data.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    marginBottom: SIZES.margin,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: SIZES.radius,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 35,
    height: 35,
  },
  itemTitle: {
    color: COLORS.dark,
    marginTop: SIZES.base,
    ...FONTS.h4,
  },
});

export default QuickLinkItem;
