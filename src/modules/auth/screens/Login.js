import React, {useState} from 'react';

import {View, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Formik} from 'formik';

import AuthTitle from '../components/AuthTitle';

import AuthFooter from '../components/AuthFooter';

import {CustomButton, InputWithIcon} from '../../../components/core';

import {COLORS, icons, SIZES} from '../../../constants';

const Login = ({authToggle}) => {
  const navigate = useNavigation();
  const [loading, setLoading] = useState(false);
  const submitLogin = values => {
    setLoading(true);
    setTimeout(() => {
      navigate.navigate('HomePage');
    }, 20);
  };
  return (
    <View style={styles.login}>
      <AuthTitle label="sign in to continue" />
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => submitLogin(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View style={styles.formContainer}>
            <InputWithIcon
              name="email"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.email}
              placeholder="Enter your email"
              icon={icons.email}
            />
            <InputWithIcon
              name="password"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.password}
              placeholder="Enter your password"
              icon={icons.lock}
              secure
            />
            <CustomButton
              label="forget password?"
              containerStyles={{
                backgroundColor: null,
                marginTop: -15,
                alignItems: 'flex-end',
              }}
              labelStyles={{color: COLORS.secondary}}
            />
            <CustomButton
              onPress={handleSubmit}
              label="log in"
              containerStyles={{marginTop: SIZES.margin}}
              loading={loading}
            />
            <AuthFooter
              label="dont have an account?"
              btn="create new account"
              onPress={authToggle}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  login: {
    paddingHorizontal: SIZES.padding,
  },
  formContainer: {
    paddingVertical: SIZES.base,
  },
});

export default Login;
