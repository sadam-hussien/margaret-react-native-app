import React from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';

import {COLORS, FONTS, SIZES, images} from '../../../constants';

const WalkthroughItem = ({data}) => {
  return (
    <View style={styles.itemContainer}>
      {/* image  */}
      <View style={styles.imageContainer}>
        <Image source={data.image} style={styles.imageInner} />
      </View>
      {/* content  */}
      <View style={styles.itemContent}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.desc}>{data.sub_title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: SIZES.width,
    justifyContent: 'space-between',
    paddingVertical: SIZES.padding,
  },
  imageContainer: {
    paddingVertical: SIZES.padding,
  },
  imageInner: {
    height: 300,
  },
  itemContent: {
    paddingHorizontal: SIZES.padding,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    color: COLORS.dark,
    ...FONTS.h1,
  },
  desc: {
    color: COLORS.grey,
    textAlign: 'center',
    marginTop: SIZES.base,
    ...FONTS.body3,
  },
});

export default WalkthroughItem;
