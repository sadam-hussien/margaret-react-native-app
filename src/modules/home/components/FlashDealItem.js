import React from 'react';

import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {COLORS, FONTS, icons, SIZES} from '../../../constants';

const FlashDealItem = ({data, active}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Product', {data})}
      style={[
        styles.container,
        {backgroundColor: active ? COLORS.error : COLORS.lightGrey},
      ]}>
      {active ? (
        <View style={styles.activeItem}>
          <Image source={icons.clock} style={styles.clockIcon} />
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.desc}>{data.desc}</Text>
        </View>
      ) : (
        <View style={styles.item}>
          <View style={{alignItems: 'center'}}>
            <Image source={data.image} style={styles.itemImg} />
          </View>
          <View style={styles.precentage}>
            <View
              style={[styles.precentageInner, {width: data.percentage}]}></View>
          </View>
          <Text style={styles.qty}>
            {data.sold_qty} / {data.total_qty}
          </Text>
          <Text style={styles.itemTitle}>product solid</Text>
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
    // flex: 1,
    // alignItems: 'center',
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
    width: 160,
    height: 160,
    marginBottom: SIZES.padding,
  },
  precentage: {
    borderRadius: 20,
    height: 20,
    backgroundColor: COLORS.light,
    marginBottom: SIZES.base,
  },
  precentageInner: {
    backgroundColor: COLORS.error,
    borderRadius: 20,
    height: '100%',
  },
  qty: {
    textAlign: 'center',
    marginBottom: SIZES.base,
    color: COLORS.dark,
    ...FONTS.body3,
  },
  itemTitle: {
    color: COLORS.dark,
    textTransform: 'capitalize',
    textAlign: 'center',
    ...FONTS.h3,
  },
});

export default FlashDealItem;
