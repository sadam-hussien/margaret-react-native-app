import React from 'react';

import {View, StyleSheet, ImageBackground, Text} from 'react-native';

import {COLORS, FONTS, SIZES} from '../../../constants';

const IntroItem = ({data, items}) => {
  return (
    <View style={styles.item}>
      <ImageBackground
        source={data.image}
        resizeMode="cover"
        style={styles.itemImg}
        imageStyle={{
          borderRadius: SIZES.radius,
        }}>
        <View style={styles.itemContent}>
          <View style={styles.itemtitles}>
            <Text style={styles.itemTitle}>{data.title}</Text>
            <Text style={styles.itemDesc}>{data.description}</Text>
          </View>
          <View style={styles.itemDate}>
            <Text style={styles.itemDateInner}>{data.date}</Text>
          </View>
        </View>
        <View style={styles.pagination}>
          {items.map((item, index) => (
            <View style={[styles.paginationItem]} key={`land-${index}`}></View>
          ))}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: SIZES.width,
    position: 'relative',
  },
  itemImg: {
    height: 190,
    width: SIZES.width - SIZES.padding * 2,
    padding: SIZES.padding,
  },
  itemContent: {
    flexDirection: 'row',
  },
  itemtitles: {
    flex: 1,
  },
  itemTitle: {
    color: COLORS.light,
    marginBottom: 5,
    ...FONTS.h2,
  },
  itemDesc: {
    color: COLORS.light80,
    ...FONTS.body3,
  },
  itemDate: {
    backgroundColor: COLORS.light,
    padding: SIZES.radius,
    borderRadius: SIZES.radius,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 90,
  },
  itemDateInner: {
    color: COLORS.dark,
    textAlign: 'center',
    ...FONTS.h3,
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 'auto',
  },
  paginationItem: {
    width: 12,
    height: 12,
    backgroundColor: COLORS.light,
    opacity: 0.4,
    marginRight: SIZES.base,
    borderRadius: 12,
  },
});

export default IntroItem;
