import React, {useState} from 'react';

import {View, StyleSheet, Image, ScrollView} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {COLORS, images, SIZES} from '../../../constants';

import Login from './Login';

import Register from './Register';

const Auth = () => {
  const [content, setContent] = useState('login');
  const authToggle = () => {
    if (content === 'login') {
      setContent('register');
    } else {
      setContent('login');
    }
  };
  return (
    <ScrollView style={styles.container}>
      {/* logo  */}
      <View style={styles.logo}>
        <Image source={images.logo} style={styles.logoImage} />
      </View>
      {/* content  */}
      <KeyboardAwareScrollView>
        {content === 'login' ? (
          <Login authToggle={authToggle} />
        ) : (
          <Register authToggle={authToggle} />
        )}
      </KeyboardAwareScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light,
  },
  logo: {
    alignItems: 'center',
    padding: SIZES.padding,
  },
  logoImage: {
    width: 140,
    height: 140,
  },
});

export default Auth;
