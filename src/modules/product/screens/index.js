import React from 'react';

import {View, StyleSheet, Text} from 'react-native';

const Product = ({route}) => {
  const {data} = route.params;
  return (
    <View>
      <Text>{data?.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Product;
