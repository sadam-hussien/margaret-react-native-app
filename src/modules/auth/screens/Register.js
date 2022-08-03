import React from 'react';

import {Formik, Form} from 'formik';

import {View, StyleSheet, Text, Button} from 'react-native';

import AuthTitle from '../components/AuthTitle';

import AuthFooter from '../components/AuthFooter';

import {CustomButton, InputWithIcon} from '../../../components/core';

import {COLORS, icons, SIZES} from '../../../constants';

const Register = ({authToggle}) => {
  return (
    <View style={styles.register}>
      <AuthTitle label="sign up to continue" />
      <Formik initialValues={{name: '', email: '', phone: '', password: ''}}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View style={styles.formContainer}>
            <InputWithIcon
              name="name"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.name}
              placeholder="Enter your name"
              icon={icons.person}
            />
            <InputWithIcon
              name="email"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.email}
              placeholder="Enter your email"
              icon={icons.email}
            />
            <InputWithIcon
              name="phone"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.phone}
              placeholder="Enter your phone"
              icon={icons.phone}
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
              onPress={handleSubmit}
              label="sign up"
              containerStyles={{marginTop: SIZES.margin}}
            />
            <AuthFooter
              label="i already have an account?"
              btn="sign in"
              onPress={authToggle}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  register: {
    paddingHorizontal: SIZES.padding,
  },
  formContainer: {
    paddingVertical: SIZES.base,
  },
});

export default Register;
