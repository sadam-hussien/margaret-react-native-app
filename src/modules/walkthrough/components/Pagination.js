import React from 'react';

import {View, StyleSheet, Animated} from 'react-native';

import {COLORS, SIZES} from '../../../constants';

export default function Pagination({items, scrollX}) {
  const dotPosition = Animated.divide(scrollX, SIZES.width);

  return (
    <View style={styles.pagination}>
      {items.map((item, index) => {
        const dotColor = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [COLORS.dark08, COLORS.primary, COLORS.dark08],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            style={[styles.pagItem, {backgroundColor: dotColor}]}
            key={`dot-${index}`}
          />
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding * 1.7,
  },
  pagItem: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 6,
  },
});
