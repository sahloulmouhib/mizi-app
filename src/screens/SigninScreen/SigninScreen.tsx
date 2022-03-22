import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import {RootStackParamList} from '../../navigation/naviagation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomTitle from '../../components/CustomTitle/CustomTitle';
import SignInAlt from '../../components/SignInAlt/SignInAlt';

import {useTranslation} from 'react-i18next';

import {Formik} from 'formik';
import * as yup from 'yup';

type Props = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

interface SigninValidation {
  email: string;
  password: string;
}

const signinValidationSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email adress is required')
    .email('Please enter valid email'),

  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z0-9]/, 'Password can only contain lettersand numbers.'),
});

const SigninScreen = ({navigation}: Props) => {
  //const {t, i18n} = useTranslation();
  const initialValues: SigninValidation = {
    email: '',
    password: '',
  };
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image
        resizeMode="contain"
        style={{
          width: 300,
          height: 200,
          alignSelf: 'center',
          marginVertical: 10,
        }}
        source={require('../../utils/images/auctionMain.png')}
      />
      <CustomTitle title="Sign in" />
      <Formik
        validateOnChange={false}
        validateOnBlur={true}
        initialValues={initialValues}
        //validateOnMount={true}
        validationSchema={signinValidationSchema}
        onSubmit={(values, actions) => {
          console.log({values, actions});
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          isValid,
          values,
          touched,
          errors,
        }) => (
          <View>
            {/* email  */}
            <CustomInput
              label="Email Address"
              placeHolder="Email"
              keyboardType="email-address"
              iconName="send-outline"
              value={values.email}
              setValue={handleChange('email')}
              withError={true}
              onBlur={handleBlur('email')}
              errorField={errors.email}
              touchedField={touched.email}
            />
            {console.log(errors)}
            <CustomInput
              label="Password"
              placeHolder="Password"
              keyboardType="default"
              value={values.password}
              setValue={handleChange('password')}
              withError={true}
              iconName="lock-closed-outline"
              onBlur={handleBlur('password')}
              errorField={errors.password}
              touchedField={touched.password}
            />
            <CustomButton
              isValid={!isValid}
              onPress={() => {}}
              // onPress={() => {
              //   navigation.navigate('Home');
              // }}
              title="Sign In"
            />
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forgot password?</Text>
            </TouchableOpacity>
            {/* <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}></TextInput>
            {errors.email && touched.email && (
              <Text style={styles.errors}>{errors.email}*</Text>
            )}

            <Icon name={!errors.email ? 'check' : 'close'} /> */}
          </View>
        )}
      </Formik>

      <Text style={styles.loginWithText}>Or login with...</Text>
      <SignInAlt />
      <View style={styles.register}>
        <Text style={styles.newText}>Don't have an account? </Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    margin: 30,
    backgroundColor: 'white',
  },
  loginWithText: {
    alignSelf: 'center',
    color: '#b1b6bf',
    fontWeight: 'bold',
    marginVertical: 20,
  },
  register: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registerText: {
    color: '#4070b4',
    fontWeight: '600',
  },
  newText: {
    color: 'grey',
    fontWeight: '500',
  },
  forgotPassword: {
    color: '#4070b4',
    fontWeight: '500',
    alignSelf: 'flex-end',
  },
  errors: {
    color: 'red',

    fontSize: 14,
  },
});
