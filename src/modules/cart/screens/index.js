import React, {useState} from 'react';

import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {Back} from '../../../components/core';

import {COLORS, FONTS, icons, SIZES, images} from '../../../constants';

import {useSelector} from 'react-redux';

import {CartItem} from '../components';

const Cart = ({navigation}) => {
  const {navigate} = navigation;
  const {cart} = useSelector(state => state.cart);
  return (
    <View style={styles.container}>
      <Back />
      {cart.length > 0 ? (
        <FlatList
          data={cart}
          renderItem={({item}) => <CartItem data={item} />}
          keyExtractor={(item, index) => `cartitem-${index}`}
          contentContainerStyle={styles.items}
        />
      ) : (
        <View style={styles.noItems}>
          <Image source={images.cart_empty} style={styles.cartEmpty} />
          <Text style={styles.cartEmptyText}>cart is empty</Text>
          <TouchableOpacity
            style={styles.shopping}
            onPress={() => navigate('Home')}>
            <Text style={styles.shoppingText}>shopping now</Text>
            <Image source={icons.chevron_right} style={styles.noImg} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noItems: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: SIZES.padding,
    paddingBottom: SIZES.padding,
  },
  cartEmpty: {
    width: 250,
    height: 250,
  },
  cartEmptyText: {
    textTransform: 'capitalize',
    color: COLORS.dark,
    marginBottom: SIZES.padding,
    ...FONTS.h1,
  },
  shopping: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.radius,
    height: 50,
    paddingHorizontal: SIZES.padding,
  },
  noImg: {
    width: 35,
    height: 35,
    marginLeft: SIZES.base,
    tintColor: COLORS.light,
  },
  shoppingText: {
    textTransform: 'capitalize',
    color: COLORS.light,
    ...FONTS.body2,
  },
  items: {
    paddingHorizontal: SIZES.padding,
  },
});

export default Cart;
