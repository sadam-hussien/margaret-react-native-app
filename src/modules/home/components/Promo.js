import React from 'react';

import {View, StyleSheet, FlatList} from 'react-native';

import PromoItem from './PromoItem';

import SectionHead from './SectionHead';

import {dummyData, SIZES} from '../../../constants';

const Promo = () => {
  return (
    <View style={styles.container}>
      <SectionHead title="promotion items" />
      <FlatList
        data={dummyData.promoItems}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <PromoItem data={item} active={!index} />
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

export default Promo;
