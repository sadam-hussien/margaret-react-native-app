import React, {useRef} from 'react';

import {View, StyleSheet, Animated, ScrollView} from 'react-native';

import {COLORS, constants, SIZES} from '../../../constants';

import {Footer, Pagination, WalkthroughItem} from '../components';

const Walkthrough = ({navigation}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <ScrollView style={styles.container}>
      <Animated.FlatList
        data={constants.walkthrough}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToInterval={SIZES.width}
        decelerationRate="fast"
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        renderItem={({item, index}) => (
          <WalkthroughItem
            data={item}
            items={constants.walkthrough}
            scrollX={scrollX}
          />
        )}
      />
      <Pagination items={constants.walkthrough} scrollX={scrollX} />
      <Footer navigation={navigation} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.light,
    flex: 1,
  },
});

export default Walkthrough;
