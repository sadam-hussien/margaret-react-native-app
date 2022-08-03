import React from 'react';

import {Formik, Form} from 'formik';

import {View, StyleSheet, Text, Button} from 'react-native';

import AuthTitle from '../components/AuthTitle';

import AuthFooter from '../components/AuthFooter';

import {CustomButton, InputWithIcon} from '../../../components/core';

import {COLORS, icons, SIZES} from '../../../constants';

const Login = ({authToggle}) => {
  return (
    <View style={styles.login}>
      <AuthTitle label="sign in to continue" />
      <Formik initialValues={{email: '', password: ''}}>
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
