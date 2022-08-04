import React from 'react';

import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

import {COLORS, FONTS, icons, SIZES} from '../../../constants';

const PromoItem = ({data, active}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {backgroundColor: active ? COLORS.primary : COLORS.lightGrey},
      ]}>
      {active ? (
        <View style={styles.activeItem}>
          <Image source={icons.cube} style={styles.clockIcon} />
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.desc}>{data.desc}</Text>
        </View>
      ) : (
        <View style={styles.item}>
          <View style={{alignItems: 'center'}}>
            <Image source={data.image} style={styles.itemImg} />
          </View>
          <Text style={styles.itemTitle}>{data.name}</Text>
          <View style={styles.itemPrice}>
            <Text style={styles.price}>${data.price}</Text>
            <Text style={styles.discount}>{data.discount}</Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: (SIZES.width - SIZES.padding * 3) / 2,
    borderRadius: SIZES.radius,
    position: 'relative',
    justifyContent: 'center',
  },
  clockIcon: {
    position: 'absolute',
    width: 130,
    height: 130,
    top: '25%',
    right: -30,
    zIndex: 9,
    tintColor: COLORS.light,
    opacity: 0.2,
  },
  activeItem: {
    padding: SIZES.padding,
  },
  item: {
    padding: SIZES.radius,
  },
  title: {
    color: COLORS.light,
    letterSpacing: 1,
    ...FONTS.h2,
  },
  desc: {
    marginTop: SIZES.padding,
    color: COLORS.light80,
    ...FONTS.body3,
  },
  itemImg: {
    width: 100,
    height: 70,
    marginBottom: SIZES.padding,
  },
  itemTitle: {
    color: COLORS.dark,
    textTransform: 'capitalize',
    ...FONTS.h3,
  },
  itemPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SIZES.margin,
  },
  price: {
    color: COLORS.primary,
    ...FONTS.h2,
  },
  discount: {
    ...FONTS.body3,
    color: COLORS.grey,
  },
});
export default PromoItem;
