import React from 'react';

import {View, StyleSheet} from 'react-native';

import {CustomButton} from '../../../components/core';

import {COLORS, SIZES} from '../../../constants';

export default function Footer({navigation}) {
  return (
    <View style={styles.btns}>
      <CustomButton
        label="join now"
        containerStyles={{
          marginRight: SIZES.margin,
          flex: 1,
          backgroundColor: COLORS.lightGrey,
        }}
        labelStyles={{
          color: COLORS.primary,
        }}
        onPress={() => navigation.navigate('Register')}
      />
      <CustomButton
        label="log in"
        containerStyles={{
          flex: 1,
        }}
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Auth'}],
          })
        }
      />
    </View>
  );
}
const styles = StyleSheet.create({
  btns: {
    flexDirection: 'row',
    paddingHorizontal: SIZES.padding,
    marginBottom: SIZES.padding,
  },
});
