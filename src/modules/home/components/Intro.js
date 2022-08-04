import React, {useRef} from 'react';

import {View, StyleSheet, Animated, Text} from 'react-native';

import IntroItem from './IntroItem';

import {COLORS, dummyData, SIZES} from '../../../constants';

const Intro = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bg}></View>
      <Animated.FlatList
        data={dummyData.banners}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <IntroItem data={item} items={dummyData.banners} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={SIZES.width}
        scrollEventThrottle={16}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.padding,
    position: 'relative',
    marginBottom: SIZES.margin,
  },
  bg: {
    position: 'absolute',
    backgroundColor: COLORS.primary,
    left: 0,
    right: 0,
    height: 80,
  },
});

export default Intro;
