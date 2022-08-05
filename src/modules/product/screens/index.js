import React, {useState} from 'react';

import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

import {Back} from '../../../components/core';

import {COLORS, FONTS, icons, SIZES} from '../../../constants';

import {useDispatch} from 'react-redux';

import {add_item} from '../../cart/store';

const Product = ({route, navigation}) => {
  const {data} = route.params;
  const {navigate} = navigation;
  const dispatch = useDispatch();
  const [inCart, setInCart] = useState(false);
  console.log(route.params);
  return (
    <View style={styles.container}>
      <Back />
      <View style={styles.containerInner}>
        <View style={styles.productName}>
          <View style={styles.productImage}>
            <Image source={data.image} style={styles.img} />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.category}>{data.category}</Text>
            <Text style={styles.title}>{data.name}</Text>
          </View>
        </View>
        <View style={styles.prdouctDetails}>
          <View style={styles.priceArea}>
            <Text style={styles.price}>${data.price}</Text>
            <TouchableOpacity style={styles.favBtn}>
              <Image source={icons.heart} style={styles.favIcon} />
            </TouchableOpacity>
            <Image />
          </View>
          <Text style={styles.desc}>{data.desc}</Text>
          {inCart ? (
            <TouchableOpacity
              style={[
                styles.inCartBtn,
                styles.cartBtn,
                {
                  backgroundColor: COLORS.secondary,
                },
              ]}
              onPress={() => navigate('Cart')}>
              <Text style={[styles.cartText, {color: COLORS.light}]}>
                go to cart
              </Text>
              <Image
                source={icons.chevron_right}
                style={[styles.cartIcon, {tintColor: COLORS.light}]}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[
                styles.cartBtn,
                {
                  backgroundColor: COLORS.light,
                },
              ]}
              onPress={() => {
                dispatch(add_item(data));
                setInCart(true);
              }}>
              <Text style={[styles.cartText, {color: COLORS.dark}]}>
                add to cart
              </Text>
              <Image
                source={icons.shoppingCart}
                style={[styles.cartIcon, {tintColor: COLORS.dark}]}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerInner: {
    flex: 1,
  },
  productName: {
    paddingHorizontal: SIZES.padding,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.padding,
  },
  productImage: {
    marginRight: SIZES.padding,
    paddingRight: SIZES.radius,
    borderRightWidth: 1,
    borderRightColor: COLORS.grey,
  },
  img: {
    maxHeight: 120,
    maxWidth: 120,
  },
  category: {
    marginBottom: SIZES.base,
    color: COLORS.grey,
    textTransform: 'capitalize',
    ...FONTS.body3,
  },
  title: {
    color: COLORS.dark,
    ...FONTS.h2,
  },
  prdouctDetails: {
    flex: 1,
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    padding: SIZES.padding,
  },
  priceArea: {
    marginVertical: SIZES.margin,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    flex: 1,
    color: COLORS.light,
    ...FONTS.body1,
  },
  favBtn: {
    backgroundColor: COLORS.light,
    borderRadius: 10,
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  favIcon: {
    tintColor: COLORS.grey,
  },
  desc: {
    color: COLORS.light60,
    ...FONTS.body3,
  },
  cartBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    // backgroundColor: COLORS.light,
    height: 60,
    borderRadius: SIZES.radius,
  },
  inCartBtn: {
    // backgroundColor: COLORS.secondary,
  },
  cartText: {
    textTransform: 'capitalize',
    // color: COLORS.dark,
    ...FONTS.body2,
  },
  cartIcon: {
    width: 30,
    height: 30,
    // tintColor: COLORS.dark,
    marginLeft: SIZES.base,
  },
});

export default Product;
