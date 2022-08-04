import React from 'react';

import {View, StyleSheet, FlatList, Text} from 'react-native';

import {Header, Search, Nav} from '../../../components/layout';

import {Intro, QuickLinkItem, FlashDeals, Promo} from '../components';

import {COLORS, dummyData, SIZES} from '../../../constants';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <Search />
        <Nav />
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={dummyData.quickALinks}
          keyExtractor={item => item.id}
          renderItem={({item}) => <QuickLinkItem data={item} />}
          ListHeaderComponent={<Intro />}
          ListFooterComponent={
            <View>
              <FlashDeals />
              <Promo />
            </View>
          }
          numColumns={4}
          columnWrapperStyle={{
            paddingHorizontal: SIZES.padding,
            justifyContent: 'space-between',
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light,
  },
  header: {
    backgroundColor: COLORS.primary,
  },
  contentContainer: {
    flex: 1,
  },
  halfBg: {
    // width: 100,
    height: 100,
    backgroundColor: COLORS.primary,
    position: 'relative',
    zIndex: 8,
  },
});

export default Home;
