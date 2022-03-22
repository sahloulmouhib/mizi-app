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
import CustomTitle from '../../components/CustomTitle/CustomTitle';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import CheckBox from '@react-native-community/checkbox';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/naviagation';
import CategoryHeader from '../../components/Home/Category/Category';
import {useTranslation} from 'react-i18next';

import {Formik} from 'formik';
import * as yup from 'yup';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

interface SignupValidation {
  firstName: string;
  lastName: string;
  birthDate: Date | string;
  phoneNumber: string;
  passwordConfirm: string;
  email: string;
  password: string;
}

const signupValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('First name is required')
    .max(20, 'First name is too long - should be 20 chars maximum')
    .min(3, 'First name is too short - should be 3 chars minimum'),

  lastName: yup
    .string()
    .required('Last Name is required')
    .max(20, 'Last name is too long - should be 20 chars maximum')
    .min(3, 'Last name is too short - should be 3 chars minimum'),

  birthDate: yup.date().required('Birth date is required'),
  //.min(3, 'Last name is too short - should be 3 chars minimum'),
  phoneNumber: yup
    .string()
    .required('Phone number is required')
    .matches(
      /((\+216)\s)?(5|2|9|4)[0-9]\s?[0-9]{3}\s?[0-9]{3}\s*/,
      'Please provide a valid Tunisian mobile Number',
    ),
  password: yup
    .string()
    .required('Password is required')
    .max(20, 'Password is too long - should be 16 chars maximum')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z0-9]/, 'Password can only contain letters and numbers.'),

  passwordConfirm: yup
    .string()
    .required('Password Confirm is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const setDate = (event: any, date: any) => {
  // handleChange('birthDate');
  console.log('mouhib', date);
};
const SignupScreen = ({navigation}: Props) => {
  const initialValues: SignupValidation = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    birthDate: new Date(),
    phoneNumber: '',
    passwordConfirm: '',
  };
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SignIn');
        }}>
        <Image
          resizeMode="cover"
          style={{
            transform: [{rotate: '180deg'}],

            marginTop: 20,
            height: 50,
            width: 50,
          }}
          source={require('../../utils/images/down-arrow.png')}
        />
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Text style={styles.joinText}>
          Get ready to bid on some cool auctions!
        </Text>
        <Image
          resizeMode="cover"
          style={{
            height: 200,

            flex: 4,
          }}
          source={require('../../utils/images/signup2.png')}
        />
      </View>

      <CustomTitle title="Sign Up" />
      <Formik
        validateOnChange={false}
        validateOnBlur={true}
        initialValues={initialValues}
        //validateOnMount={true}
        validationSchema={signupValidationSchema}
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
            <CustomInput
              label="First Name"
              placeHolder="First Name"
              iconName="person-outline"
              value={values.firstName}
              setValue={handleChange('firstName')}
              withError={true}
              onBlur={handleBlur('firstName')}
              errorField={errors.firstName}
              touchedField={touched.firstName}
            />
            <CustomInput
              label="Last Name"
              placeHolder="Last Name"
              iconName="person-outline"
              value={values.lastName}
              setValue={handleChange('lastName')}
              withError={true}
              onBlur={handleBlur('lastName')}
              errorField={errors.lastName}
              touchedField={touched.lastName}
            />
            {console.log(values.birthDate)}
            <RNDateTimePicker
              //onTouchEnd={handleChange('birthDate')}
              mode="date"
              value={values.birthDate as Date}
              onChange={(event: any, date: any) => {
                handleChange('birthDate');
                console.log(date, values.birthDate);
                console.log('mouhib', date);
              }}
            />
            {/* <CustomInput
              label="Birth Date"
              placeHolder="Birth Date"
              // keyboardType=''
              iconName="calendar-outline"
              value={values.birthDate.toString()}
              setValue={handleChange('birthDate')}
              withError={true}
              onBlur={handleBlur('lastName')}
              errorField={errors.birthDate}
              touchedField={touched.birthDate}
            /> */}
            <TextInput
              //onChangeText={handleChange('email')}
              //onBlur={handleBlur('email')}
              value={values.birthDate.toString()}></TextInput>

            {console.log(errors)}
            <CustomInput
              label="Phone Number"
              placeHolder="Phone Number"
              keyboardType="phone-pad"
              iconName="person-outline"
              value={values.phoneNumber}
              setValue={handleChange('phoneNumber')}
              withError={true}
              onBlur={handleBlur('phoneNumber')}
              errorField={errors.phoneNumber}
              touchedField={touched.phoneNumber}
            />
            <CustomInput
              label="Email Address"
              placeHolder="Email Address"
              keyboardType="email-address"
              iconName="mail-outline"
              value={values.email}
              setValue={handleChange('email')}
              withError={true}
              onBlur={handleBlur('email')}
              errorField={errors.email}
              touchedField={touched.email}
            />
            <CustomInput
              label="Password"
              placeHolder="Password"
              iconName="lock-closed-outline"
              value={values.password}
              setValue={handleChange('password')}
              withError={true}
              onBlur={handleBlur('password')}
              errorField={errors.password}
              touchedField={touched.password}
            />

            <CustomInput
              label="Password Confirm"
              placeHolder="Password Confirm "
              iconName="lock-closed-outline"
              value={values.passwordConfirm}
              setValue={handleChange('passwordConfirm')}
              withError={true}
              onBlur={handleBlur('passwordConfirm')}
              errorField={errors.passwordConfirm}
              touchedField={touched.passwordConfirm}
            />
          </View>
        )}
      </Formik>
      <View style={styles.agreementContainer}>
        <CheckBox disabled={false} value={true} />
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, nulla
          nihil! Nobis modi, accusantium .Nobis modi, accusantium .
        </Text>
      </View>

      <CustomButton title={'Sign Up'} />
      <Text
        onPress={() => {
          navigation.navigate('SignIn');
        }}
        style={styles.registerText}>
        Already Have an account?
      </Text>
    </ScrollView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  errors: {
    color: 'red',

    fontSize: 14,
  },
  container: {
    marginHorizontal: 30,
    backgroundColor: 'white',
  },
  loginWithText: {
    alignSelf: 'center',
    color: '#b1b6bf',
    fontWeight: 'bold',
  },
  register: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registerText: {
    textAlign: 'center',
    color: '#4070b4',
    fontWeight: '600',
    marginBottom: 20,
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
  agreementContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 30,
    marginVertical: 10,
  },
  agreement: {},
  imageContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  joinText: {
    color: 'black',
    fontWeight: 'bold',
    flex: 3,
    fontSize: 20,
    alignSelf: 'center',
  },
});
