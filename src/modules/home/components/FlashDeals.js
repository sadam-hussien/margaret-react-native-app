import React from 'react';

import {View, StyleSheet, FlatList} from 'react-native';

import FlashDealItem from './FlashDealItem';

import SectionHead from './SectionHead';

import {dummyData, SIZES} from '../../../constants';

const FlashDeals = () => {
  return (
    <View style={styles.container}>
      <SectionHead title="sale time product" />
      <FlatList
        data={dummyData.flashDeals}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <FlashDealItem data={item} active={!index} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: SIZES.padding}}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: SIZES.padding,
  },
  separator: {
    width: SIZES.margin,
  },
});

export default FlashDeals;
