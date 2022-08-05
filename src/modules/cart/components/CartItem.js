import React, {useState} from 'react';

import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

import {COLORS, FONTS, SIZES, icons} from '../../../constants';

import {useDispatch} from 'react-redux';

import {remove_item} from '../store';

const CartItem = ({data}) => {
  const dispatch = useDispatch();

  const [qty, setQty] = useState(1);
  const decreaseQty = () => {
    if (qty > 1) {
      setQty(prev => prev - 1);
    }
  };
  const increaseQty = () => {
    setQty(prev => prev + 1);
  };
  return (
    <View style={styles.item}>
      <Image source={data.image} style={styles.img} />
      <View style={styles.content}>
        <View style={styles.name}>
          <View style={styles.categoryWrapper}>
            <Text style={styles.category}>{data.category}</Text>
            <TouchableOpacity onPress={() => dispatch(remove_item(data.id))}>
              <Image source={icons.deleteIcon} style={styles.deleteIcon} />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>{data.name}</Text>
        </View>
        <View style={styles.price}>
          <Text style={styles.priceInner}>${data.price}</Text>
          <View style={styles.qty}>
            <TouchableOpacity style={styles.qtyBtn} onPress={increaseQty}>
              <Text style={styles.qtyBtnText}>+</Text>
            </TouchableOpacity>
            <Text style={styles.qtyValue}>{qty}</Text>
            <TouchableOpacity style={styles.qtyBtn} onPress={decreaseQty}>
              <Text style={styles.qtyBtnText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.margin,
    borderWidth: 1,
    borderColor: COLORS.grey,
    borderRadius: SIZES.radius,
    padding: SIZES.radius,
    position: 'relative',
  },
  img: {
    width: 120,
    height: 100,
  },
  content: {
    flex: 1,
    marginLeft: SIZES.radius,
  },
  categoryWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  category: {
    color: COLORS.grey,
    marginBottom: SIZES.base,
    ...FONTS.body3,
  },
  deleteIcon: {
    tintColor: COLORS.primary,
  },
  title: {
    color: COLORS.dark,
    marginBottom: SIZES.radius,
    ...FONTS.h3,
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceInner: {
    color: COLORS.primary,
    ...FONTS.body2,
  },
  qty: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qtyValue: {
    marginHorizontal: SIZES.margin,
    color: COLORS.primary,
    ...FONTS.h3,
  },
  qtyBtn: {
    borderWidth: 2,
    borderColor: COLORS.grey,
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyBtnText: {
    color: COLORS.dark,
    ...FONTS.body2,
  },
});

export default CartItem;
